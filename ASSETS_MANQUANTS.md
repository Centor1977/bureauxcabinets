# Assets manquants

## Images manquantes

Aucune image bloquante manquante. Les 7 images définitives fournies ont été renommées et intégrées :

- `hero-lille-entree-smartphone.png` — Hero
- `probleme-cles-perdues.png` — Bloc problème
- `probleme-boite-cles-visible.png` — Bloc problème
- `probleme-interphone.png` — Bloc problème
- `cible-location-courte-duree.png` — Bloc cible
- `cible-investisseur-meuble.png` — Bloc cible
- `cible-conciergerie-gestionnaire.png` — Bloc cible

## Icônes manquantes

Aucune icône manquante. Le projet disposait déjà d'un jeu d'icônes individuelles en SVG inline (`src/components/icons.tsx`), au style ligne fine navy + accent teal, conforme à la DA demandée et déjà câblé dans les sections bénéfices, solutions, qualification et réassurance.

Deux planches d'icônes (PNG) ont été fournies dans `public/images` en complément. Conformément à la consigne « Aucune planche d'icônes ne doit être intégrée dans le site », elles n'ont pas été utilisées : les icônes individuelles déjà présentes couvrent le même besoin visuel.

## Autres assets

- **Favicon** : créé en SVG (`/public/favicon.svg`), symbole porte + cadenas, navy + teal, référencé dans les métadonnées. Le fichier `favicon.ico` existant est celui généré par défaut par Create Next App et ne reflète pas la DA — l'outillage disponible ne permet pas de générer proprement un `.ico` multi-résolutions à partir du SVG. À régénérer manuellement si un favicon `.ico` cohérent est nécessaire (ex. via un outil externe de conversion).
- **Image Open Graph** : générée à partir du visuel hero avec overlay navy et mention « Accès Autonome Lille » (`/public/images/acces-autonome/og-image.png`), référencée dans les métadonnées de la page.
