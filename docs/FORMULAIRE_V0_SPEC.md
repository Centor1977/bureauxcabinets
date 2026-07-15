# Formulaire V0 — Spécification verrouillée

Le formulaire est en 3 étapes. Dans le hero, seule l’étape 1 est visible. Les étapes 2 et 3 sont affichées en lignes fermées.

## Étape 1 sur 3 — Décrivez votre besoin

Titre : **Décrivez votre besoin**

Sous-texte : **Répondez à quelques questions pour être orienté vers la solution adaptée à votre logement.**

### Champ 1 — Type de bien

Type : réponse unique

Options :

- Logement meublé / location de courte durée
- Appartement en immeuble
- Immeuble avec plusieurs logements
- Maison
- Bureau / cabinet
- Autre

### Champ 2 — Quel problème voulez-vous résoudre ?

Type : réponses multiples

Options :

- Éviter les remises de clés
- Permettre des arrivées autonomes
- Donner accès au ménage ou à des prestataires
- Ouvrir à distance
- Changer les codes entre deux voyageurs
- Gérer plusieurs utilisateurs
- Je ne sais pas, je veux être conseillé

Règle : **“Je ne sais pas, je veux être conseillé” est exclusif.**

### Champ 3 — Accès concerné

Type : réponses multiples

Options :

- Porte du logement
- Entrée de l’immeuble
- Interphone
- Boîte à clés actuelle à remplacer
- Plusieurs accès
- Je ne sais pas

Règle : **“Je ne sais pas” est exclusif.**

### Champ 4 — Ville / code postal

Type : champ libre

Placeholder : **Lille, 59000**

### Champ 5 — Délai souhaité

Type : réponse unique

Options :

- Dès que possible
- Sous 7 jours
- Sous 15 jours
- Sous 1 mois
- Projet à anticiper
- Je ne sais pas

Bouton : **Continuer pour recevoir une estimation**

Lignes fermées :

- **Étape 2 : photo facultative pour faciliter l’estimation**
- **Étape 3 : coordonnées et créneaux de rappel**

Réassurance : **Vos informations sont utilisées uniquement pour qualifier votre demande et vous orienter vers un professionnel adapté.**

## Étape 2 sur 3 — Photo et précisions

Titre : **Aidez le professionnel à comprendre votre situation**

Sous-texte : **Une photo de votre porte, serrure ou interphone aide à vérifier la compatibilité et à éviter les échanges inutiles.**

### Combien de logements souhaitez-vous équiper ?

Type : réponse unique

Options :

- 1 logement
- 2 à 3 logements
- 4 à 10 logements
- Plus de 10 logements
- Je gère des biens pour des clients
- Je ne sais pas encore

### Photo de votre porte, serrure ou interphone

Type : upload facultatif

Label : **Photo de votre porte, serrure ou interphone**

Aide : **Facultatif — recommandé pour une estimation plus rapide**

Règles visibles :

- 1 à 3 photos maximum ;
- champ non obligatoire ;
- afficher les fichiers sélectionnés ;
- permettre la suppression d’une photo avant envoi.

### Quel niveau de solution imaginez-vous ?

Type : réponse unique

Options :

- Une solution simple avec code
- Une ouverture à distance
- Des accès temporaires pour voyageurs ou prestataires
- Une gestion de plusieurs utilisateurs
- Une solution complète logement + immeuble
- Je veux être conseillé

### Précisions utiles

Type : champ libre facultatif

Placeholder : **Exemple : interphone d’immeuble, boîte à clés actuelle, arrivée voyageurs tardive, ménage à faire entrer, plusieurs logements à équiper…**

Bouton : **Continuer vers mes coordonnées**

## Étape 3 sur 3 — Coordonnées et rappel

Titre : **Quand peut-on vous rappeler ?**

Sous-texte : **Indiquez vos coordonnées et vos disponibilités. Ces créneaux facilitent le rappel mais ne constituent pas un rendez-vous confirmé.**

### Coordonnées

- Nom — obligatoire
- Téléphone — obligatoire
- Email — obligatoire ou fortement recommandé

### Mode de contact préféré

Type : réponse unique

Options :

- Téléphone
- WhatsApp
- Email

### Disponibilités de rappel

Type : multi-créneaux

- Date 1
- Créneaux : 9h–11h, 11h–13h, 14h–16h, 16h–18h, 18h–20h
- Date 2 facultative
- Date 3 facultative
- Lien : **Ajouter une autre date**
- Option : **Je suis flexible**

Règles :

- l’utilisateur doit choisir au moins un créneau ou sélectionner **Je suis flexible** ;
- les créneaux ne sont jamais présentés comme un rendez-vous confirmé ;
- si **Je suis flexible** est coché, les créneaux peuvent rester optionnels.

Mention obligatoire : **Les créneaux indiqués sont transmis au professionnel pour faciliter le rappel. Ils ne constituent pas un rendez-vous confirmé.**

Consentement avant bouton final : **J’accepte que mes informations soient utilisées pour qualifier ma demande et puissent être transmises à un ou plusieurs professionnels vérifiés dans le cadre de mon projet.**

Bouton final : **Recevoir une estimation**

Réassurance finale : **Votre demande est qualifiée puis transmise à un professionnel vérifié selon votre projet, votre zone et sa disponibilité.**

## Données à préparer côté soumission

Le développeur doit prévoir une structure de lead contenant les informations du formulaire, mais le choix de la base de données, de l’envoi, du stockage photo et des notifications reste à arbitrer séparément.
