import type { StatutRecherche, TypeLieu, TypeProjet } from "./types";

export const TYPE_PROJET_LABELS: Record<TypeProjet, string> = {
  location: "Location",
  achat: "Achat",
  les_deux: "Location ou achat",
};

export const TYPE_LIEU_LABELS: Record<TypeLieu, string> = {
  bureau: "Bureau",
  cabinet: "Cabinet professionnel",
  local_pro: "Local professionnel",
  autre: "Autre",
};

// Statuts exposés au demandeur. Volontairement sans détail sur la mécanique
// interne (validation admin, seuils, etc.) : uniquement où en est sa recherche.
export const STATUT_RECHERCHE_LABELS: Record<
  StatutRecherche,
  { label: string; description: string }
> = {
  brouillon: {
    label: "Brouillon",
    description: "Votre recherche n'est pas encore finalisée.",
  },
  email_a_confirmer: {
    label: "Email à confirmer",
    description: "Confirmez votre email pour finaliser votre recherche.",
  },
  en_revue: {
    label: "En cours de vérification",
    description:
      "Votre recherche a été reçue et est en cours de vérification par notre équipe.",
  },
  active: {
    label: "Active",
    description:
      "Votre recherche est active. Nos agences partenaires peuvent vous faire des propositions.",
  },
  en_pause: {
    label: "En pause",
    description: "Votre recherche est temporairement en pause.",
  },
  cloturee: {
    label: "Clôturée",
    description: "Cette recherche est clôturée.",
  },
  archivee: {
    label: "Archivée",
    description: "Cette recherche est archivée.",
  },
};
