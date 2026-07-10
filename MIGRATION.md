# MIGRATION.md — Déplacer Bureaux & Cabinets vers un autre compte Supabase

Objectif : pouvoir transférer le projet vers le compte Supabase de la future société
**sans réécriture**, en restant sur un plan gratuit des deux côtés.

## Règle de base (déjà appliquée)

- **100 % du schéma est en migrations versionnées** (`supabase/migrations/`). Rejouer
  toute la base ailleurs = `supabase db push`.
- **Aucun `project_ref` ni clé API en dur** dans le code : tout passe par variables
  d'environnement.
- **RLS + logique métier dans la base** : le comportement voyage avec le schéma.

## État actuel du projet source

- Projet : `bureaux-cabinets` — ref `pgyiyzebsfusziapzrlg` — région `eu-west-3`
- Organisation : RUB CONSEIL SAS (plan gratuit)
- Migrations appliquées, dans l'ordre :
  1. `enums_statuts`
  2. `tables_principales`
  3. `helpers_rls_vues_anonymisees`
  4. `grants_triggers_gardefous`
  5. `gardefou_envoi_proposition`

## Point d'attention plan gratuit

La limite de **2 projets actifs** se compte sur **toutes les organisations où tu es
Owner/Admin, cumulées**. Pour ne pas rester bloqué :

> Le compte de destination doit appartenir à la future société (propriétaire différent),
> avec son propre quota. Sinon le transfert ne libère aucune marge.

---

## Chemin A — Transfert natif (recommandé)

Aucune migration de données. Conditions : être **Owner** sur les deux organisations,
et un slot de projet actif libre côté destination.

1. Se faire ajouter comme Owner sur l'organisation de destination.
2. Supabase Dashboard → Project Settings → General → **Transfer project**.
3. Le projet part intact : base, auth, storage, edge functions, données.
   **Le `project_ref` et les clés API ne changent pas** → rien à modifier côté Next.js.

## Chemin B — Migration CLI (filet de sécurité)

Si le transfert natif est impossible (comptes cloisonnés).

1. **Schéma** : `supabase db push` sur le nouveau projet (rejoue les migrations).
2. **Données** : `pg_dump` (données seules) depuis la source → restauration sur la cible.
3. **Auth** : réexporter/réimporter les utilisateurs `auth.users` (ou repartir de zéro
   si test). ⚠️ le trigger `on_auth_user_created` recrée les profils automatiquement.
4. **Storage** : recopier les buckets et leurs politiques (voir ci-dessous).
5. **Secrets / Edge Functions** : redéployer et reconfigurer les secrets (Stripe, SMS).
6. **Clés** : `project_ref` et clés API **changent** → mettre à jour les variables
   d'environnement (voir ci-dessous).

---

## À recréer / vérifier côté destination

- [ ] Variables d'environnement Next.js :
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY` (serveur uniquement, jamais côté client)
- [ ] Buckets Storage (fichiers sources d'offres) + politiques d'accès + job de
      suppression programmée (`date_suppression_fichier_source`).
- [ ] Providers d'authentification (email/OTP) et templates d'emails.
- [ ] Secrets des Edge Functions : Stripe (clé secrète, webhook secret), fournisseur SMS.
- [ ] Webhook Stripe repointé vers la nouvelle URL de fonction.
- [ ] Rejouer `supabase test db` (tests critères bloquants) sur la cible : doit passer
      au vert avant de basculer le trafic.

## Variables d'environnement — matrice

| Variable | Change au chemin A ? | Change au chemin B ? |
| --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Non | Oui |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Non | Oui |
| `SUPABASE_SERVICE_ROLE_KEY` | Non | Oui |
| Secrets Stripe / SMS | Non | À reconfigurer |
