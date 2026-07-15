# CLAUDE.md — Accès Autonome Lille

## Rôle

Tu développes le site public V0 Accès Autonome Lille.

Tu n’es pas autorisé à modifier le positionnement, la direction artistique, le wording, l’ordre des sections, le parcours formulaire ou le périmètre fonctionnel.

Tu dois exécuter le brief, pas l’améliorer.

## Sources de vérité

1. Lis d’abord ce fichier.
2. Lis ensuite `TASKS_CLAUDE_CODE.md`.
3. Lis ensuite `docs/BRIEF_CONSOLIDE_SITE_PUBLIC_V0.md`.
4. Utilise `assets/maquette_home_reference.png` uniquement comme référence visuelle.
5. En cas de conflit entre la maquette et le brief écrit, le brief écrit prévaut.

## Interdictions absolues

Ne pas :

- réécrire les textes ;
- changer les CTA ;
- modifier la structure de la home ;
- ajouter des sections ;
- ajouter des pages non demandées ;
- transformer le site en annuaire de serruriers ;
- transformer le site en comparateur travaux ;
- transformer le site en site SaaS générique ;
- ajouter des avis, étoiles, notes ou chiffres non prouvés ;
- ajouter un espace client ;
- ajouter un espace installateur ;
- ajouter un paiement ;
- ajouter un back-office ;
- ajouter un blog ;
- créer des pages SEO locales multiples ;
- créer un calendrier synchronisé ;
- créer un devis automatique.

## Pages à développer

- `/`
- `/merci`
- `/contact`
- `/installateurs`
- `/mentions-legales`
- `/confidentialite`

## Règle de wording

Tous les textes visibles doivent être repris du brief écrit.

Correction orthographique mineure autorisée uniquement si elle ne change pas le sens. Reformulation interdite sauf demande explicite.

## Règle DA

Respecter la maquette de référence :

- premium ;
- locale ;
- sobre ;
- immobilier / sécurité / logement réel ;
- bleu nuit ;
- blanc cassé ;
- gris chaud clair ;
- accent teal ;
- beaucoup d’espace blanc ;
- pas d’effet annuaire travaux ;
- pas d’effet SaaS générique.

## Formulaire

Le formulaire est en 3 étapes.

Dans le hero, seule l’étape 1 est visible.

Étape 1 :

- Type de bien
- Quel problème voulez-vous résoudre ?
- Accès concerné
- Ville / code postal
- Délai souhaité

Ne pas afficher “Nombre de logements à équiper” en étape 1.

Étape 2 :

- Nombre de logements
- Photo facultative
- Niveau de solution imaginé
- Précisions utiles

Étape 3 :

- Nom
- Téléphone
- Email
- Mode de contact préféré
- Créneaux de rappel
- Je suis flexible

Les créneaux sont des disponibilités de rappel, pas un rendez-vous confirmé.

## Technique

Les choix techniques ne sont pas verrouillés dans ce pack.

Ne pas imposer de stack, base de données, CRM, outil d’email, hébergement, stockage photo ou tracking sans validation humaine.

Si un choix technique est nécessaire, le signaler comme point à arbitrer.

## Avant de coder

Produire un plan d’implémentation court et attendre validation humaine.

## Après chaque étape

Vérifier :

- respect du wording ;
- respect de l’ordre des sections ;
- respect de la DA ;
- responsive mobile ;
- absence de fonctionnalité hors périmètre ;
- conformité à la checklist recette.
