import type { Enums } from "@/lib/supabase/database.types";

export type TypeProjet = Enums<"type_projet">;
export type TypeLieu = Enums<"type_lieu">;
export type StatutRecherche = Enums<"statut_recherche">;
export type NiveauSecteur = Enums<"niveau_secteur">;

// Un secteur choisi via l'autocomplétion (table `secteur`, niveaux
// commune/quartier uniquement en V1).
export type SecteurRef = {
  id: string;
  nom: string;
  niveau: NiveauSecteur;
  parentNom?: string | null;
};

export type DemandeurPayload = {
  nom: string;
  email: string;
  telephone: string | null;
  entreprise: string | null;
};

export type RecherchePayload = {
  type_projet: TypeProjet | null;
  type_lieu: TypeLieu | null;
  activite: string | null;
  // Secteur principal : le matching se fait exclusivement sur son id.
  // zone_principale ne sert que de libellé d'affichage, dérivé du secteur choisi.
  secteur_principal: SecteurRef | null;
  zone_principale: string | null;
  secteurs_acceptes: SecteurRef[];
  surface_souhaitee: number | null;
  surface_minimale: number | null;
  budget_max: number | null;
  delai: string | null;
  criteres_indispensables: string[];
  criteres_souhaites: string[];
  description: string | null;
};

export type PendingRecherche = {
  demandeur: DemandeurPayload;
  recherche: RecherchePayload;
};
