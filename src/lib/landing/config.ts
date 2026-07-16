import type { LandingConfig } from "./types";

const HERO_IMAGE = {
  src: "/images/acces-autonome/hero-lille-entree-smartphone.png",
  alt: "Entrée d’immeuble à Lille avec interphone et ouverture à distance par smartphone",
};

export const landingPagesConfig: Record<
  "serrureConnectee" | "boiteCles" | "locationCourteDuree",
  LandingConfig
> = {
  serrureConnectee: {
    slug: "serrure-connectee",
    intent: "serrure_connectee",
    route: "/installer-serrure-connectee-lille",
    meta: {
      title: "Installer une serrure connectée à Lille | Accès Autonome Lille",
      description:
        "Faites vérifier la compatibilité de votre porte et recevez une estimation pour installer une serrure connectée à Lille métropole.",
    },
    hero: {
      eyebrow: "Lille & métropole",
      h1: "Installer une serrure connectée à Lille",
      subtitle:
        "Faites vérifier la compatibilité de votre porte et recevez une estimation par un professionnel adapté.",
      ctaPrimaryLabel: "Vérifier la compatibilité de ma porte",
      ctaSecondaryLabel: "Voir comment ça marche",
      ctaSecondaryHref: "#comment-ca-marche",
      reassurances: [
        "Évaluation de la compatibilité",
        "Photo facultative",
        "Professionnel vérifié",
        "Gratuit et sans engagement",
      ],
      image: HERO_IMAGE,
    },
    benefits: [
      "Vérifier si la porte et la serrure actuelles sont compatibles",
      "Identifier le fonctionnement adapté : code, application ou accès temporaire",
      "Obtenir une estimation avant de choisir une solution",
    ],
    problem: {
      title: "Ne choisissez pas une serrure connectée au hasard",
      text: "Toutes les serrures connectées ne sont pas adaptées à toutes les portes, à tous les cylindres ni à tous les usages. Le fonctionnement peut aussi dépendre du réseau disponible, de l’entrée de l’immeuble et des personnes auxquelles vous souhaitez donner accès. Décrivez votre situation et ajoutez une photo pour faciliter l’évaluation.",
    },
    solutions: {
      title: "Quels éléments doivent être vérifiés ?",
      items: [
        "Type de porte et de serrure",
        "Cylindre et compatibilité mécanique",
        "Présence du Wi-Fi ou fonctionnement hors ligne",
        "Accès voyageurs, ménage ou prestataires",
        "Entrée de l’immeuble et interphone",
        "Création et suppression des accès temporaires",
      ],
    },
    faq: [
      {
        question: "Toutes les portes sont-elles compatibles avec une serrure connectée ?",
        answer:
          "Cela dépend du type de porte, du cylindre et de la serrure déjà en place. C’est justement ce que le professionnel vérifié évalue avec vous, à partir des informations et de la photo transmises, avant de vous proposer une solution adaptée.",
      },
      {
        question: "Faut-il obligatoirement du Wi-Fi ?",
        answer:
          "Non. Certaines solutions fonctionnent hors ligne. Le professionnel identifie avec vous le fonctionnement le plus adapté selon le réseau disponible dans votre logement ou votre immeuble.",
      },
      {
        question: "Puis-je conserver une clé physique ?",
        answer:
          "Selon la solution retenue, une clé physique peut être conservée en secours. Ce point est précisé avec vous lors de l’évaluation de votre situation.",
      },
      {
        question: "Peut-on créer des accès temporaires ?",
        answer:
          "Oui, c’est l’un des usages les plus courants : donner un accès temporaire à un voyageur, un prestataire ou une équipe de ménage, puis le supprimer une fois la période terminée.",
      },
      {
        question: "Combien coûte l’installation d’une serrure connectée ?",
        answer:
          "Le prix dépend de votre porte, de la solution retenue et de l’installation nécessaire. Après votre demande, un professionnel vérifié vous rappelle pour évaluer votre situation et vous proposer une estimation ou un devis adapté.",
      },
      {
        question: "Une photo suffit-elle pour vérifier la compatibilité ?",
        answer:
          "Une photo de votre porte, serrure ou interphone aide à préparer une première évaluation, mais elle ne remplace pas l’échange avec le professionnel qui confirme la faisabilité lors du rappel.",
      },
    ],
    prefill: {
      problemes: ["Permettre des arrivées autonomes", "Ouvrir à distance"],
      acces: ["Porte du logement"],
      niveauSolution: "Une solution simple avec code",
    },
  },

  boiteCles: {
    slug: "boite-cles",
    intent: "boite_cles",
    route: "/remplacer-boite-a-cles-lille",
    meta: {
      title: "Remplacer une boîte à clés à Lille | Accès Autonome Lille",
      description:
        "Clé non remise, code rarement changé ou boîtier visible : faites évaluer une alternative à votre boîte à clés à Lille.",
    },
    hero: {
      eyebrow: "Lille & métropole",
      h1: "Marre des boîtes à clés visibles ou mal refermées ?",
      subtitle:
        "Clé non remise, code rarement changé, boîtier visible ou prochain voyageur bloqué : faites évaluer une solution d’accès autonome adaptée à votre logement.",
      ctaPrimaryLabel: "Évaluer une alternative à ma boîte à clés",
      ctaSecondaryLabel: "Voir les solutions possibles",
      ctaSecondaryHref: "#comment-ca-marche",
      reassurances: [
        "Évaluation de votre situation",
        "Photo facultative",
        "Plusieurs solutions possibles",
        "Gratuit et sans engagement",
      ],
      image: HERO_IMAGE,
    },
    benefits: [
      "Éviter qu’une clé ne soit pas remise dans le boîtier",
      "Réduire les codes partagés trop longtemps",
      "Donner des accès temporaires aux voyageurs et prestataires",
    ],
    problem: {
      title: "La boîte à clés dépanne, mais elle peut aussi devenir une source de stress",
      text: "Clé oubliée, boîtier mal refermé, code connu d’anciens voyageurs ou prestataires, dispositif visible depuis la rue : la boîte à clés reste pratique, mais elle n’est pas toujours adaptée à une gestion régulière et à distance.",
      image: {
        src: "/images/acces-autonome/probleme-boite-cles-visible.png",
        alt: "Boîtes à clés visibles accrochées près d’une entrée d’immeuble",
      },
      points: [
        "La clé n’est pas remise après le départ",
        "Le boîtier reste mal fermé",
        "Le même code est utilisé trop longtemps",
        "Plusieurs personnes connaissent le code",
        "Le prochain voyageur ne peut plus entrer",
        "Le propriétaire doit se déplacer ou changer la serrure",
      ],
    },
    solutions: {
      title: "Quelles alternatives peuvent être étudiées ?",
      items: [
        "Serrure connectée",
        "Code temporaire",
        "Badge",
        "Ouverture à distance",
        "Interphone connecté",
        "Solution combinant entrée d’immeuble et porte du logement",
      ],
    },
    faq: [
      {
        question: "Est-il possible de conserver une boîte à clés en solution de secours ?",
        answer:
          "Selon votre situation, une boîte à clés peut rester en solution de secours en complément d’une autre solution. Ce point est évalué avec vous par le professionnel.",
      },
      {
        question: "Peut-on créer un code différent pour chaque voyageur ?",
        answer:
          "Oui, c’est l’un des usages les plus courants des solutions étudiées : un code ou un accès propre à chaque voyageur, modifiable ou supprimé ensuite.",
      },
      {
        question: "Que se passe-t-il si le logement n’a pas de Wi-Fi ?",
        answer:
          "Certaines solutions fonctionnent hors ligne. Le professionnel identifie avec vous le fonctionnement adapté au réseau disponible dans votre logement.",
      },
      {
        question: "Peut-on donner un accès distinct au ménage ?",
        answer:
          "Oui, un accès récurrent et distinct peut être prévu pour le ménage ou les prestataires, séparé de celui des voyageurs.",
      },
      {
        question: "Comment savoir si la porte est compatible ?",
        answer:
          "Décrivez votre porte et ajoutez une photo facultative : le professionnel vérifié évalue la compatibilité avec vous lors du rappel.",
      },
      {
        question: "Quel budget prévoir pour remplacer une boîte à clés ?",
        answer:
          "Le budget dépend de la solution retenue et de votre logement. Après votre demande, un professionnel vérifié vous rappelle pour vous proposer une estimation ou un devis adapté.",
      },
    ],
    prefill: {
      problemes: ["Éviter les remises de clés", "Permettre des arrivées autonomes"],
      acces: ["Boîte à clés actuelle à remplacer"],
      niveauSolution: "Je veux être conseillé",
    },
  },

  locationCourteDuree: {
    slug: "location-courte-duree",
    intent: "location_courte_duree",
    route: "/acces-autonome-location-courte-duree-lille",
    meta: {
      title: "Accès autonome pour location courte durée à Lille",
      description:
        "Simplifiez les arrivées voyageurs et l’accès du ménage grâce à une solution adaptée à votre location courte durée à Lille.",
    },
    hero: {
      eyebrow: "Lille & métropole",
      h1: "Simplifiez les arrivées dans votre location courte durée à Lille",
      subtitle:
        "Donnez accès aux voyageurs, au ménage et aux prestataires sans organiser chaque remise de clés.",
      ctaPrimaryLabel: "Trouver la solution adaptée à mon logement",
      ctaSecondaryLabel: "Voir comment ça marche",
      ctaSecondaryHref: "#comment-ca-marche",
      reassurances: [
        "Voyageurs et prestataires",
        "Accès temporaires",
        "Gestion à distance",
        "Professionnel vérifié",
      ],
      image: HERO_IMAGE,
    },
    benefits: [
      "Faciliter les arrivées tardives",
      "Donner un accès distinct au ménage",
      "Modifier ou supprimer les accès à distance",
    ],
    problem: {
      title: "Les arrivées deviennent compliquées dès que vous n’êtes pas sur place",
      text: "Voyageur en retard, ménage à faire entrer, clé non restituée, boîte à clés visible ou interphone compliqué : la gestion des accès devient rapidement une source d’imprévus lorsque le logement est géré à distance.",
    },
    solutions: {
      title: "Une solution adaptée à votre logement et à votre organisation",
      items: [
        "Serrure connectée pour la porte du logement",
        "Code temporaire pour les voyageurs",
        "Accès récurrent pour le ménage",
        "Badge ou code pour les prestataires",
        "Interphone connecté lorsque l’installation le permet",
        "Gestion de plusieurs logements ou utilisateurs",
      ],
    },
    faq: [
      {
        question: "Peut-on créer un accès différent pour chaque voyageur ?",
        answer:
          "Oui, un code ou un accès propre à chaque voyageur peut être mis en place, puis modifié ou supprimé entre deux séjours.",
      },
      {
        question: "Le ménage peut-il disposer de son propre accès ?",
        answer:
          "Oui, un accès récurrent et distinct de celui des voyageurs peut être prévu pour le ménage ou les prestataires.",
      },
      {
        question: "Que faire si l’entrée de l’immeuble nécessite un badge ?",
        answer:
          "L’entrée de l’immeuble est prise en compte dans l’évaluation, en complément de la porte du logement, lorsque l’installation le permet.",
      },
      {
        question: "Faut-il modifier la porte ?",
        answer:
          "Cela dépend de la solution retenue et de votre porte actuelle. Le professionnel vérifié évalue ce point avec vous à partir des informations et de la photo transmises.",
      },
      {
        question: "Est-ce adapté si je gère plusieurs logements ?",
        answer:
          "Oui, le service s’adresse aussi aux personnes qui gèrent plusieurs logements ou plusieurs utilisateurs, avec une solution adaptée à cette organisation.",
      },
      {
        question: "Comment obtenir une estimation ?",
        answer:
          "Décrivez votre logement et votre besoin dans le formulaire : votre demande est qualifiée puis transmise à un professionnel vérifié qui vous rappelle pour vous proposer une estimation ou un devis.",
      },
    ],
    prefill: {
      typeBien: "Logement meublé / location de courte durée",
      problemes: ["Permettre des arrivées autonomes", "Donner accès au ménage ou à des prestataires"],
      niveauSolution: "Je veux être conseillé",
    },
  },
};

export type LandingPageKey = keyof typeof landingPagesConfig;
