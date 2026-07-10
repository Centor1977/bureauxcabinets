-- ============================================================
-- TESTS CRITÈRES BLOQUANTS — Bureaux & Cabinets (doc 07)
-- À placer dans supabase/tests/ et lancer via : supabase test db
-- Ces tests simulent les rôles applicatifs (auth.uid) et vérifient
-- que la confidentialité tient au niveau BASE, pas seulement UI.
-- ============================================================
begin;
select plan(11);

-- ---------- SEED (exécuté en tant que postgres) ----------
insert into auth.users (id, aud, role, email) values
  ('11111111-1111-1111-1111-111111111111','authenticated','authenticated','demandeur@test.fr'),
  ('22222222-2222-2222-2222-222222222222','authenticated','authenticated','agence-ok@test.fr'),
  ('33333333-3333-3333-3333-333333333333','authenticated','authenticated','agence-ko@test.fr');

-- Le trigger on_auth_user_created a créé 3 profils "demandeur" : on corrige les rôles agence.
update profil set role = 'agence'
  where id in ('22222222-2222-2222-2222-222222222222',
               '33333333-3333-3333-3333-333333333333');

insert into demandeur (id, profil_id, nom, email, telephone, entreprise) values
  ('dddddddd-0000-0000-0000-000000000001',
   '11111111-1111-1111-1111-111111111111',
   'Jean Test','jean@test.fr','0612345678','ACME SARL');

insert into agence (id, profil_id, nom, email, secteurs_couverts, statut, moyen_paiement_actif) values
  ('aaaaaaaa-0000-0000-0000-000000000001',
   '22222222-2222-2222-2222-222222222222',
   'Agence OK','ok@agence.fr', array['Lille'], 'validee', true),
  ('aaaaaaaa-0000-0000-0000-000000000002',
   '33333333-3333-3333-3333-333333333333',
   'Agence KO','ko@agence.fr', array['Lille'], 'demande_recue', false);

insert into recherche (id, demandeur_id, statut, zone_principale, motif_cloture) values
  ('rrrrrrrr-0000-0000-0000-000000000001',
   'dddddddd-0000-0000-0000-000000000001',
   'active','Lille','motif-confidentiel');

-- Proposition envoyée par l'agence OK (a un moyen de paiement -> autorisée)
insert into proposition (id, recherche_id, agence_id, statut, secteur_affiche) values
  ('pppppppp-0000-0000-0000-000000000001',
   'rrrrrrrr-0000-0000-0000-000000000001',
   'aaaaaaaa-0000-0000-0000-000000000001','envoyee','Lille');

-- Proposition préparée par l'agence KO (pas de moyen -> servira au test d'envoi bloqué)
insert into proposition (id, recherche_id, agence_id, statut, secteur_affiche) values
  ('pppppppp-0000-0000-0000-000000000002',
   'rrrrrrrr-0000-0000-0000-000000000001',
   'aaaaaaaa-0000-0000-0000-000000000002','preparee','Lille');

-- MER sans paiement (test du garde-fou R5)
insert into mise_en_relation (id, proposition_id, recherche_id, agence_id, demandeur_id, statut) values
  ('mmmmmmmm-0000-0000-0000-000000000001',
   'pppppppp-0000-0000-0000-000000000001',
   'rrrrrrrr-0000-0000-0000-000000000001',
   'aaaaaaaa-0000-0000-0000-000000000001',
   'dddddddd-0000-0000-0000-000000000001','demandee');

-- MER avec paiement réussi (test du chemin nominal)
insert into mise_en_relation (id, proposition_id, recherche_id, agence_id, demandeur_id, statut) values
  ('mmmmmmmm-0000-0000-0000-000000000002',
   'pppppppp-0000-0000-0000-000000000001',
   'rrrrrrrr-0000-0000-0000-000000000001',
   'aaaaaaaa-0000-0000-0000-000000000001',
   'dddddddd-0000-0000-0000-000000000001','telephone_verifie');
insert into paiement (mise_en_relation_id, agence_id, statut) values
  ('mmmmmmmm-0000-0000-0000-000000000002',
   'aaaaaaaa-0000-0000-0000-000000000001','paiement_reussi');

-- On bascule sur le rôle applicatif. Ensuite on ne change que le "sub" (auth.uid).
set local role authenticated;

-- Helper : devient l'utilisateur <uid>
--   select set_config('request.jwt.claims', json_build_object('sub', <uid>)::text, true);

-- ========== CRITÈRE : aucun lead public / accès par secteur (R1) ==========
select set_config('request.jwt.claims',
  json_build_object('sub','22222222-2222-2222-2222-222222222222')::text, true);
select is( (select count(*) from lead_anonymise), 1::bigint,
  'Agence validée voit le lead actif de son secteur');

select set_config('request.jwt.claims',
  json_build_object('sub','33333333-3333-3333-3333-333333333333')::text, true);
select is( (select count(*) from lead_anonymise), 0::bigint,
  'Agence NON validée ne voit aucun lead');

-- ========== CRITÈRE : coordonnées demandeur invisibles à l'agence (R2) ==========
select set_config('request.jwt.claims',
  json_build_object('sub','22222222-2222-2222-2222-222222222222')::text, true);
select is( (select count(*) from demandeur), 0::bigint,
  'Agence ne lit aucune ligne de la table demandeur (PII protégée)');

-- ========== CRITÈRE : motif de clôture invisible à l'agence (doc 07) ==========
select is( (select count(*) from recherche), 0::bigint,
  'Agence ne lit pas la table recherche en direct (motif_cloture protégé)');

-- ========== CRITÈRE : identité agence masquée côté demandeur (R3) ==========
select set_config('request.jwt.claims',
  json_build_object('sub','11111111-1111-1111-1111-111111111111')::text, true);
select is(
  (select agence_affichee from proposition_anonymisee limit 1),
  'Agence partenaire',
  'Demandeur voit "Agence partenaire", jamais l''identité réelle');

-- ========== CRITÈRE : aucune coordonnée débloquée avant mise en relation ==========
select is( (select count(*) from coordonnees_agence_debloquees), 0::bigint,
  'Aucune coordonnée agence débloquée tant que la MER n''est pas confirmée');

-- ========== CRITÈRE : demandeur ne voit jamais la mécanique de paiement ==========
select is( (select count(*) from paiement), 0::bigint,
  'Demandeur ne lit aucune ligne de paiement');

-- ========== CRITÈRE : pas de confirmation sans paiement réussi (R5) ==========
select throws_ok(
  $$ update mise_en_relation set statut = 'confirmee'
     where id = 'mmmmmmmm-0000-0000-0000-000000000001' $$,
  'P0001',
  null,
  'Confirmer une MER sans paiement réussi lève une exception');

-- ========== CRITÈRE : pas d'envoi de proposition sans moyen de paiement ==========
select set_config('request.jwt.claims',
  json_build_object('sub','33333333-3333-3333-3333-333333333333')::text, true);
select throws_ok(
  $$ update proposition set statut = 'envoyee'
     where id = 'pppppppp-0000-0000-0000-000000000002' $$,
  'P0001',
  null,
  'Envoyer une proposition sans moyen de paiement actif lève une exception');

-- ========== CHEMIN NOMINAL : confirmation après paiement réussi ==========
select set_config('request.jwt.claims',
  json_build_object('sub','11111111-1111-1111-1111-111111111111')::text, true);
update mise_en_relation set statut = 'confirmee'
  where id = 'mmmmmmmm-0000-0000-0000-000000000002';
select is( (select count(*) from coordonnees_agence_debloquees), 1::bigint,
  'Après confirmation, le demandeur accède aux coordonnées agence');

select set_config('request.jwt.claims',
  json_build_object('sub','22222222-2222-2222-2222-222222222222')::text, true);
select is( (select count(*) from coordonnees_demandeur_debloquees), 1::bigint,
  'Après confirmation, l''agence accède aux coordonnées demandeur');

select * from finish();
rollback;
