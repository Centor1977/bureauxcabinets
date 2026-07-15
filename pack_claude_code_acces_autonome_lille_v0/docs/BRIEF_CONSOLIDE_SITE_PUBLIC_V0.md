# Brief consolidé verrouillé — Site public V0 Accès Autonome Lille

## 1. Source de vérité

Ce document est la source officielle pour développer le site public V0 Accès Autonome Lille.

La maquette visuelle `assets/maquette_home_reference.png` sert uniquement de référence graphique : direction artistique, ambiance, structure, hiérarchie visuelle.

En cas d’écart entre la maquette et ce brief écrit, le brief écrit prévaut.

## 2. Objectif du site

Accès Autonome Lille est un service local qui aide les propriétaires de logements meublés, locations de courte durée, conciergeries et biens gérés à distance à Lille métropole à ne plus gérer les clés à la main.

Le site permet au visiteur de :

1. comprendre le bénéfice de l’accès autonome ;
2. décrire son logement et son besoin ;
3. ajouter une photo si possible ;
4. indiquer ses coordonnées et créneaux de rappel ;
5. être rappelé par un professionnel vérifié pour confirmer la solution adaptée et proposer une estimation ou un devis.

Le site ne vend pas directement le matériel.
Le site ne promet pas un devis immédiat sans rappel.
Le site ne confirme pas automatiquement un rendez-vous.
Le site ne doit pas ressembler à un annuaire de serruriers ni à un comparateur travaux générique.

## 3. Pages à développer

Pages obligatoires V0 :

1. `/` — Home page avec formulaire multi-step
2. `/merci` — Page de confirmation après formulaire
3. `/contact` — Page contact locale
4. `/installateurs` — Page discrète pour les professionnels
5. `/mentions-legales` — Mentions légales
6. `/confidentialite` — Politique de confidentialité

## 4. Hors périmètre à ce stade

Ne pas développer :

- espace client ;
- espace installateur ;
- back-office complet ;
- paiement en ligne ;
- matching automatique ;
- calendrier synchronisé ;
- devis automatique ;
- compte utilisateur ;
- système d’avis ;
- blog ;
- pages locales multiples ;
- parcours admin / artisan complet ;
- système de relance.

Les choix techniques restent à arbitrer avec le développeur : stack, base de données, stockage des photos, envoi email, tracking, hébergement, CRM, automatisations.

## 5. Direction artistique verrouillée

Respecter l’univers validé :

- premium ;
- local ;
- sobre ;
- immobilier / sécurité / logement réel ;
- crédible terrain ;
- bleu nuit ;
- blanc cassé ;
- gris chaud clair ;
- accent teal ;
- beaucoup d’espace blanc ;
- hiérarchie claire ;
- visuels réels de portes, façades lilloises, interphones, logements meublés ;
- pas d’effet SaaS générique ;
- pas d’effet annuaire travaux ;
- pas d’avis clients fictifs ;
- pas d’étoiles ;
- pas de chiffres non prouvés.

## 6. Navigation

Header :

- Logo texte : **Accès Autonome Lille**
- Menu :
  - **Solutions** → ancre `#solutions`
  - **Comment ça marche** → ancre `#comment-ca-marche`
  - **FAQ** → ancre `#faq`
  - **Contact** → `/contact`
- Repère de confiance : **Besoin d’aide ? 03 20 15 78 45**
- CTA : **Recevoir une estimation**

Le lien `/installateurs` ne doit pas apparaître dans le header principal. Il peut apparaître dans le footer.

## 7. Home page — structure obligatoire

Respecter cet ordre exact :

1. Header
2. Hero avec formulaire étape 1 visible
3. Bloc bénéfices accès autonome
4. Bloc problème des clés à distance
5. Bloc solutions
6. Bloc qualification : éviter les installateurs au hasard
7. Bloc cible
8. Bloc fonctionnement
9. Bloc réassurance
10. FAQ
11. CTA final
12. Footer localisé

Aucune section supplémentaire ne doit être ajoutée.

## 8. Hero

Label :

**Lille & métropole**

Titre :

**Fini les remises de clés pour vos logements meublés à Lille.**

Sous-texte :

**Décrivez votre logement, votre porte et votre besoin. Un professionnel vérifié vous rappelle pour confirmer la solution adaptée — code, badge, serrure connectée, interphone ou ouverture à distance — et vous proposer une estimation ou un devis.**

Réassurances :

- **Gratuit**
- **Sans engagement**
- **Professionnels vérifiés**
- **Logements meublés & gestion à distance**

CTA principal :

**Recevoir une estimation pour mon logement**

Lien secondaire :

**Voir comment ça marche**

## 9. Formulaire multi-step

Le formulaire est en 3 étapes. Dans le hero, seule l’étape 1 est ouverte. Les étapes 2 et 3 apparaissent uniquement sous forme de lignes fermées.

### Étape 1 sur 3 — Décrivez votre besoin

Titre :

**Décrivez votre besoin**

Sous-texte :

**Répondez à quelques questions pour être orienté vers la solution adaptée à votre logement.**

Champs visibles :

#### Type de bien — réponse unique

- Logement meublé / location de courte durée
- Appartement en immeuble
- Immeuble avec plusieurs logements
- Maison
- Bureau / cabinet
- Autre

#### Quel problème voulez-vous résoudre ? — réponses multiples

- Éviter les remises de clés
- Permettre des arrivées autonomes
- Donner accès au ménage ou à des prestataires
- Ouvrir à distance
- Changer les codes entre deux voyageurs
- Gérer plusieurs utilisateurs
- Je ne sais pas, je veux être conseillé

Règle : **“Je ne sais pas, je veux être conseillé” est exclusif.** Si cette option est sélectionnée, elle désactive les autres choix.

#### Accès concerné — réponses multiples

- Porte du logement
- Entrée de l’immeuble
- Interphone
- Boîte à clés actuelle à remplacer
- Plusieurs accès
- Je ne sais pas

Règle : **“Je ne sais pas” est exclusif.**

#### Ville / code postal — champ libre

Placeholder : **Lille, 59000**

#### Délai souhaité — réponse unique

- Dès que possible
- Sous 7 jours
- Sous 15 jours
- Sous 1 mois
- Projet à anticiper
- Je ne sais pas

Bouton :

**Continuer pour recevoir une estimation**

Lignes fermées sous le bouton :

**Étape 2 : photo facultative pour faciliter l’estimation**

**Étape 3 : coordonnées et créneaux de rappel**

Réassurance courte :

**Vos informations sont utilisées uniquement pour qualifier votre demande et vous orienter vers un professionnel adapté.**

### Étape 2 sur 3 — Photo et précisions

Titre :

**Aidez le professionnel à comprendre votre situation**

Sous-texte :

**Une photo de votre porte, serrure ou interphone aide à vérifier la compatibilité et à éviter les échanges inutiles.**

Champs :

#### Combien de logements souhaitez-vous équiper ? — réponse unique

- 1 logement
- 2 à 3 logements
- 4 à 10 logements
- Plus de 10 logements
- Je gère des biens pour des clients
- Je ne sais pas encore

#### Photo de votre porte, serrure ou interphone — upload facultatif

Label : **Photo de votre porte, serrure ou interphone**

Aide : **Facultatif — recommandé pour une estimation plus rapide**

Règles visibles :

- 1 à 3 photos maximum ;
- champ non obligatoire ;
- affichage des fichiers sélectionnés ;
- suppression possible avant envoi.

#### Quel niveau de solution imaginez-vous ? — réponse unique

- Une solution simple avec code
- Une ouverture à distance
- Des accès temporaires pour voyageurs ou prestataires
- Une gestion de plusieurs utilisateurs
- Une solution complète logement + immeuble
- Je veux être conseillé

#### Précisions utiles — champ libre facultatif

Placeholder :

**Exemple : interphone d’immeuble, boîte à clés actuelle, arrivée voyageurs tardive, ménage à faire entrer, plusieurs logements à équiper…**

Bouton :

**Continuer vers mes coordonnées**

### Étape 3 sur 3 — Coordonnées et rappel

Titre :

**Quand peut-on vous rappeler ?**

Sous-texte :

**Indiquez vos coordonnées et vos disponibilités. Ces créneaux facilitent le rappel mais ne constituent pas un rendez-vous confirmé.**

Champs coordonnées :

- Nom — obligatoire
- Téléphone — obligatoire
- Email — obligatoire ou fortement recommandé

Mode de contact préféré — réponse unique :

- Téléphone
- WhatsApp
- Email

Disponibilités de rappel — multi-créneaux :

- Date 1
- Créneaux : 9h–11h, 11h–13h, 14h–16h, 16h–18h, 18h–20h
- Date 2 facultative
- Date 3 facultative
- Lien : **Ajouter une autre date**
- Option : **Je suis flexible**

Règles :

- l’utilisateur doit choisir au moins un créneau ou sélectionner **Je suis flexible** ;
- les créneaux ne doivent jamais être présentés comme un rendez-vous confirmé ;
- si **Je suis flexible** est coché, les créneaux peuvent rester optionnels.

Mention obligatoire :

**Les créneaux indiqués sont transmis au professionnel pour faciliter le rappel. Ils ne constituent pas un rendez-vous confirmé.**

Bouton final :

**Recevoir une estimation**

Réassurance finale :

**Votre demande est qualifiée puis transmise à un professionnel vérifié selon votre projet, votre zone et sa disponibilité.**

Consentement à afficher avant le bouton final :

**J’accepte que mes informations soient utilisées pour qualifier ma demande et puissent être transmises à un ou plusieurs professionnels vérifiés dans le cadre de mon projet.**

## 10. Message ou page de confirmation `/merci`

Titre :

**Votre demande a bien été reçue.**

Texte :

**Nous allons qualifier votre besoin et l’orienter vers un professionnel vérifié adapté à votre projet. Il pourra vous rappeler sur les créneaux indiqués pour confirmer la faisabilité et vous proposer une estimation ou un devis.**

Mention obligatoire :

**Les créneaux indiqués facilitent le rappel mais ne constituent pas un rendez-vous confirmé.**

CTA :

**Retour à l’accueil**

Lien secondaire :

**Nous contacter**

## 11. Bloc bénéfices

Titre :

**L’accès autonome, simplement plus efficace.**

Texte :

**L’accès autonome remplace les remises de clés contraignantes par une gestion à distance plus simple, plus sécurisée et plus fiable. Codes temporaires, badge, serrure connectée, interphone ou ouverture à distance : vous gardez le contrôle de vos arrivées, sans être présent sur place.**

Bénéfices :

- **Arrivées voyageurs plus fluides**
- **Moins d’imprévus et de clés perdues**
- **Accès ménage et prestataires simplifiés**
- **Codes temporaires ou accès révoqués**
- **Plus de contrôle, moins de déplacements**

## 12. Bloc problème

Titre :

**Les clés deviennent un problème dès que vous gérez vos arrivées à distance.**

Texte :

**Arrivées tardives, ménage, prestataires, voyageurs qui perdent les clés, boîte à clés visible, interphone d’immeuble : la gestion des accès devient vite un point de friction. Accès Autonome Lille vous aide à identifier la solution adaptée à votre logement et à être rappelé par un professionnel vérifié.**

## 13. Bloc solutions

ID section : `solutions`

Titre :

**Quelle solution pour votre logement ?**

Cartes :

### Serrure connectée

**Pour équiper la porte d’un logement meublé ou géré à distance et limiter la gestion des clés physiques.**

### Interphone connecté

**Pour faciliter l’ouverture d’une entrée d’immeuble lorsque l’installation le permet.**

### Code, badge ou ouverture à distance

**Pour donner un accès plus simple à un voyageur, un prestataire, une équipe de ménage ou un utilisateur régulier.**

### Accès autonome complet

**Pour traiter à la fois l’entrée de l’immeuble et la porte du logement lorsque les deux accès posent problème.**

## 14. Bloc qualification

Titre :

**Évitez d’appeler des installateurs au hasard.**

Texte :

**Chaque porte, chaque immeuble et chaque usage ont leurs contraintes. Selon votre situation, la bonne solution peut être un simple code, une serrure connectée, un interphone connecté, une ouverture à distance ou une installation plus complète. Accès Autonome Lille qualifie votre demande pour l’orienter vers un professionnel adapté.**

Bénéfices :

- **Un seul formulaire**
- **Une demande qualifiée**
- **Un professionnel adapté**

## 15. Bloc cible

Titre :

**Pensé pour les logements meublés, la courte durée et la gestion à distance.**

Texte :

**Accès Autonome Lille s’adresse d’abord aux propriétaires de logements meublés, locations de courte durée, conciergeries et biens gérés à distance à Lille métropole. Le service peut aussi concerner les bureaux, cabinets partagés et locaux professionnels lorsque plusieurs personnes doivent accéder au lieu sans multiplier les clés physiques.**

Usages visuels :

- **Locations de courte durée**
- **Investisseurs en location meublée**
- **Gestionnaires & conciergeries**

## 16. Bloc fonctionnement

ID section : `comment-ca-marche`

Titre :

**Comment ça marche ?**

Étapes :

1. **Vous décrivez votre logement et votre besoin**  
   Type de bien, accès concerné, photo si possible et disponibilités de rappel.

2. **La demande est qualifiée**  
   Le besoin est analysé pour identifier la solution et le type de professionnel adaptés.

3. **Un professionnel vérifié vous rappelle**  
   Il confirme la faisabilité, échange avec vous et précise la solution possible.

4. **Vous obtenez une estimation ou un devis**  
   Vous recevez une proposition et choisissez librement si vous souhaitez poursuivre.

## 17. Bloc réassurance

Titre :

**Des professionnels vérifiés, pas une simple liste d’annuaire.**

Texte :

**Les demandes sont orientées vers des professionnels dont l’activité, la zone d’intervention et l’expérience correspondent aux solutions recherchées : serrure connectée, interphone connecté, badge, code, ouverture à distance ou contrôle d’accès simple. L’objectif est d’éviter les contacts inutiles avec des intervenants non adaptés.**

Badges :

- **Professionnels vérifiés**
- **Lille & métropole**
- **Réponse rapide**

## 18. FAQ

ID section : `faq`

Créer une FAQ courte avec ces questions :

1. **Combien coûte une installation pour un logement meublé ?**
2. **Puis-je ajouter une photo de ma porte ou de mon interphone ?**
3. **Est-ce adapté à une location de courte durée ?**
4. **Toutes les portes et interphones sont-ils compatibles ?**
5. **Comment fonctionne le rappel du professionnel ?**

Réponses courtes, rassurantes, sans promesse excessive.

## 19. CTA final

Titre :

**Vous voulez arrêter de gérer les clés à la main ?**

Texte :

**Décrivez votre logement une fois, ajoutez une photo si vous le souhaitez, et recevez le rappel d’un professionnel vérifié pour identifier la solution d’accès autonome adaptée à votre bien.**

Bouton :

**Recevoir une estimation pour mon logement**

## 20. Footer localisé

Contenu exact :

**Accès Autonome Lille — Solutions d’accès autonome pour logements meublés, locations de courte durée et biens gérés à distance à Lille métropole.**

Mots-clés naturels :

**Serrure connectée · Interphone connecté · Code · Badge · Ouverture à distance**

Liens :

- Contact
- Installateurs
- Mentions légales
- Politique de confidentialité

## 21. Page `/contact`

Objectif : rassurer et renforcer l’ancrage local.

Titre :

**Une question sur votre demande ?**

Texte :

**Accès Autonome Lille vous aide à identifier le bon professionnel pour équiper un logement meublé, une location de courte durée ou un bien géré à distance à Lille métropole.**

Contenu :

- téléphone : **03 20 15 78 45**
- email : **[à compléter]**
- horaires : **[à compléter]**
- zone couverte : Lille, La Madeleine, Marcq-en-Barœul, Lambersart, Villeneuve-d’Ascq, Roubaix, Tourcoing, Croix, Wasquehal, métropole lilloise

Formulaire contact court :

- nom ;
- email ;
- téléphone ;
- message.

Rappels :

- gratuit ;
- sans engagement ;
- service local.

## 22. Page `/installateurs`

Page discrète, lien footer uniquement.

Titre :

**Installateurs à Lille : recevez des demandes qualifiées d’accès autonome**

Texte :

**Accès Autonome Lille met en relation des propriétaires de logements meublés, locations de courte durée, conciergeries et biens gérés à distance avec des professionnels capables d’installer des solutions d’accès autonome à Lille métropole.**

Contenu :

- demandes qualifiées ;
- zone Lille & métropole ;
- serrure connectée ;
- interphone connecté ;
- code ;
- badge ;
- ouverture à distance ;
- coordonnées transmises uniquement après accord et validation ;
- contact pro.

CTA :

**Être contacté pour recevoir des demandes**

Pas de paiement en V0. Pas d’espace installateur.

## 23. Mentions légales

Prévoir une page simple avec placeholders :

- Nom société : **[à compléter]**
- Forme juridique : **[à compléter]**
- Adresse : **[à compléter]**
- SIRET : **[à compléter]**
- Responsable publication : **[à compléter]**
- Email : **[à compléter]**
- Hébergeur : **[à compléter]**

## 24. Politique de confidentialité

La page doit expliquer clairement :

- quelles données sont collectées ;
- pourquoi elles sont collectées ;
- que les photos servent uniquement à comprendre l’installation et faciliter l’estimation ;
- que les coordonnées peuvent être transmises à un ou plusieurs professionnels vérifiés uniquement dans le cadre de la demande ;
- durée de conservation : **[à compléter]** ;
- droits d’accès, rectification, suppression ;
- contact pour exercer les droits.

Phrase obligatoire :

**Les photos transmises servent uniquement à comprendre votre porte, serrure ou interphone afin de faciliter la qualification de votre demande et l’estimation par un professionnel.**

Phrase obligatoire :

**Vos coordonnées peuvent être transmises à un ou plusieurs professionnels vérifiés uniquement dans le cadre de votre demande.**

## 25. Google Maps / visibilité locale

Le site doit soutenir la visibilité locale Google Maps / Google Business Profile.

À respecter :

- cohérence du nom **Accès Autonome Lille** ;
- mentions naturelles de **Lille & métropole** ;
- page Contact locale complète ;
- footer localisé ;
- mots-clés métier intégrés naturellement ;
- pas de bourrage SEO.

Requêtes à soutenir naturellement :

- accès autonome Lille ;
- serrure connectée Lille ;
- interphone connecté Lille ;
- ouverture à distance Lille ;
- boîte à clés Lille ;
- location de courte durée Lille ;
- logement meublé Lille.
