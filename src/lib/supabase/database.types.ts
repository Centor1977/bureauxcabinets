export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      agence: {
        Row: {
          contact_nom: string | null
          created_at: string
          email: string | null
          id: string
          moyen_paiement_actif: boolean
          nom: string | null
          profil_id: string | null
          secteurs_couverts: string[] | null
          site_web: string | null
          statut: Database["public"]["Enums"]["statut_agence"]
          telephone: string | null
          types_offres: string[] | null
          validated_at: string | null
        }
        Insert: {
          contact_nom?: string | null
          created_at?: string
          email?: string | null
          id?: string
          moyen_paiement_actif?: boolean
          nom?: string | null
          profil_id?: string | null
          secteurs_couverts?: string[] | null
          site_web?: string | null
          statut?: Database["public"]["Enums"]["statut_agence"]
          telephone?: string | null
          types_offres?: string[] | null
          validated_at?: string | null
        }
        Update: {
          contact_nom?: string | null
          created_at?: string
          email?: string | null
          id?: string
          moyen_paiement_actif?: boolean
          nom?: string | null
          profil_id?: string | null
          secteurs_couverts?: string[] | null
          site_web?: string | null
          statut?: Database["public"]["Enums"]["statut_agence"]
          telephone?: string | null
          types_offres?: string[] | null
          validated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "agence_profil_id_fkey"
            columns: ["profil_id"]
            isOneToOne: false
            referencedRelation: "profil"
            referencedColumns: ["id"]
          },
        ]
      }
      agence_secteur: {
        Row: {
          agence_id: string
          secteur_id: string
        }
        Insert: {
          agence_id: string
          secteur_id: string
        }
        Update: {
          agence_id?: string
          secteur_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "agence_secteur_agence_id_fkey"
            columns: ["agence_id"]
            isOneToOne: false
            referencedRelation: "agence"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "agence_secteur_secteur_id_fkey"
            columns: ["secteur_id"]
            isOneToOne: false
            referencedRelation: "secteur"
            referencedColumns: ["id"]
          },
        ]
      }
      demande_precision: {
        Row: {
          answered_at: string | null
          created_at: string
          id: string
          proposition_id: string
          question: string
          reponse: string | null
          statut: Database["public"]["Enums"]["statut_precision"]
        }
        Insert: {
          answered_at?: string | null
          created_at?: string
          id?: string
          proposition_id: string
          question: string
          reponse?: string | null
          statut?: Database["public"]["Enums"]["statut_precision"]
        }
        Update: {
          answered_at?: string | null
          created_at?: string
          id?: string
          proposition_id?: string
          question?: string
          reponse?: string | null
          statut?: Database["public"]["Enums"]["statut_precision"]
        }
        Relationships: [
          {
            foreignKeyName: "demande_precision_proposition_id_fkey"
            columns: ["proposition_id"]
            isOneToOne: false
            referencedRelation: "proposition"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "demande_precision_proposition_id_fkey"
            columns: ["proposition_id"]
            isOneToOne: false
            referencedRelation: "proposition_anonymisee"
            referencedColumns: ["id"]
          },
        ]
      }
      demandeur: {
        Row: {
          created_at: string
          email: string | null
          entreprise: string | null
          id: string
          nom: string | null
          profil_id: string | null
          telephone: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          entreprise?: string | null
          id?: string
          nom?: string | null
          profil_id?: string | null
          telephone?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          entreprise?: string | null
          id?: string
          nom?: string | null
          profil_id?: string | null
          telephone?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "demandeur_profil_id_fkey"
            columns: ["profil_id"]
            isOneToOne: false
            referencedRelation: "profil"
            referencedColumns: ["id"]
          },
        ]
      }
      mise_en_relation: {
        Row: {
          agence_id: string
          confirmed_at: string | null
          created_at: string
          demandeur_id: string
          id: string
          proposition_id: string
          recherche_id: string
          statut: Database["public"]["Enums"]["statut_mise_en_relation"]
          telephone_verifie: boolean
        }
        Insert: {
          agence_id: string
          confirmed_at?: string | null
          created_at?: string
          demandeur_id: string
          id?: string
          proposition_id: string
          recherche_id: string
          statut?: Database["public"]["Enums"]["statut_mise_en_relation"]
          telephone_verifie?: boolean
        }
        Update: {
          agence_id?: string
          confirmed_at?: string | null
          created_at?: string
          demandeur_id?: string
          id?: string
          proposition_id?: string
          recherche_id?: string
          statut?: Database["public"]["Enums"]["statut_mise_en_relation"]
          telephone_verifie?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "mise_en_relation_agence_id_fkey"
            columns: ["agence_id"]
            isOneToOne: false
            referencedRelation: "agence"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mise_en_relation_demandeur_id_fkey"
            columns: ["demandeur_id"]
            isOneToOne: false
            referencedRelation: "demandeur"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mise_en_relation_proposition_id_fkey"
            columns: ["proposition_id"]
            isOneToOne: false
            referencedRelation: "proposition"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mise_en_relation_proposition_id_fkey"
            columns: ["proposition_id"]
            isOneToOne: false
            referencedRelation: "proposition_anonymisee"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mise_en_relation_recherche_id_fkey"
            columns: ["recherche_id"]
            isOneToOne: false
            referencedRelation: "lead_anonymise"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mise_en_relation_recherche_id_fkey"
            columns: ["recherche_id"]
            isOneToOne: false
            referencedRelation: "recherche"
            referencedColumns: ["id"]
          },
        ]
      }
      notification: {
        Row: {
          contenu: string | null
          created_at: string
          destinataire_profil_id: string
          id: string
          lu: boolean
          type: string | null
        }
        Insert: {
          contenu?: string | null
          created_at?: string
          destinataire_profil_id: string
          id?: string
          lu?: boolean
          type?: string | null
        }
        Update: {
          contenu?: string | null
          created_at?: string
          destinataire_profil_id?: string
          id?: string
          lu?: boolean
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notification_destinataire_profil_id_fkey"
            columns: ["destinataire_profil_id"]
            isOneToOne: false
            referencedRelation: "profil"
            referencedColumns: ["id"]
          },
        ]
      }
      offre: {
        Row: {
          agence_id: string
          created_at: string
          date_suppression_fichier_source: string | null
          donnees_completees: Json | null
          donnees_extraites: Json | null
          fichier_source_temporaire: string | null
          id: string
          recherche_id: string
          statut_extraction: string | null
          statut_offre: Database["public"]["Enums"]["statut_offre"]
        }
        Insert: {
          agence_id: string
          created_at?: string
          date_suppression_fichier_source?: string | null
          donnees_completees?: Json | null
          donnees_extraites?: Json | null
          fichier_source_temporaire?: string | null
          id?: string
          recherche_id: string
          statut_extraction?: string | null
          statut_offre?: Database["public"]["Enums"]["statut_offre"]
        }
        Update: {
          agence_id?: string
          created_at?: string
          date_suppression_fichier_source?: string | null
          donnees_completees?: Json | null
          donnees_extraites?: Json | null
          fichier_source_temporaire?: string | null
          id?: string
          recherche_id?: string
          statut_extraction?: string | null
          statut_offre?: Database["public"]["Enums"]["statut_offre"]
        }
        Relationships: [
          {
            foreignKeyName: "offre_agence_id_fkey"
            columns: ["agence_id"]
            isOneToOne: false
            referencedRelation: "agence"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "offre_recherche_id_fkey"
            columns: ["recherche_id"]
            isOneToOne: false
            referencedRelation: "lead_anonymise"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "offre_recherche_id_fkey"
            columns: ["recherche_id"]
            isOneToOne: false
            referencedRelation: "recherche"
            referencedColumns: ["id"]
          },
        ]
      }
      paiement: {
        Row: {
          agence_id: string
          created_at: string
          id: string
          mise_en_relation_id: string
          montant: number
          statut: Database["public"]["Enums"]["statut_paiement"]
          stripe_payment_intent_id: string | null
          updated_at: string
        }
        Insert: {
          agence_id: string
          created_at?: string
          id?: string
          mise_en_relation_id: string
          montant?: number
          statut?: Database["public"]["Enums"]["statut_paiement"]
          stripe_payment_intent_id?: string | null
          updated_at?: string
        }
        Update: {
          agence_id?: string
          created_at?: string
          id?: string
          mise_en_relation_id?: string
          montant?: number
          statut?: Database["public"]["Enums"]["statut_paiement"]
          stripe_payment_intent_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "paiement_agence_id_fkey"
            columns: ["agence_id"]
            isOneToOne: false
            referencedRelation: "agence"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "paiement_mise_en_relation_id_fkey"
            columns: ["mise_en_relation_id"]
            isOneToOne: false
            referencedRelation: "coordonnees_agence_debloquees"
            referencedColumns: ["mise_en_relation_id"]
          },
          {
            foreignKeyName: "paiement_mise_en_relation_id_fkey"
            columns: ["mise_en_relation_id"]
            isOneToOne: false
            referencedRelation: "coordonnees_demandeur_debloquees"
            referencedColumns: ["mise_en_relation_id"]
          },
          {
            foreignKeyName: "paiement_mise_en_relation_id_fkey"
            columns: ["mise_en_relation_id"]
            isOneToOne: false
            referencedRelation: "mise_en_relation"
            referencedColumns: ["id"]
          },
        ]
      }
      profil: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["role_utilisateur"]
        }
        Insert: {
          created_at?: string
          id: string
          role: Database["public"]["Enums"]["role_utilisateur"]
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["role_utilisateur"]
        }
        Relationships: []
      }
      proposition: {
        Row: {
          adresse_precise_masquee: string | null
          agence_id: string
          charges: number | null
          configuration: string | null
          created_at: string
          criteres_respectes: Json | null
          disponibilite: string | null
          id: string
          offre_id: string | null
          pertinence_score: number | null
          photos: string[] | null
          points_a_verifier: string[] | null
          prix: number | null
          recherche_id: string
          secteur_affiche: string | null
          sent_at: string | null
          statut: Database["public"]["Enums"]["statut_proposition"]
          surface: number | null
        }
        Insert: {
          adresse_precise_masquee?: string | null
          agence_id: string
          charges?: number | null
          configuration?: string | null
          created_at?: string
          criteres_respectes?: Json | null
          disponibilite?: string | null
          id?: string
          offre_id?: string | null
          pertinence_score?: number | null
          photos?: string[] | null
          points_a_verifier?: string[] | null
          prix?: number | null
          recherche_id: string
          secteur_affiche?: string | null
          sent_at?: string | null
          statut?: Database["public"]["Enums"]["statut_proposition"]
          surface?: number | null
        }
        Update: {
          adresse_precise_masquee?: string | null
          agence_id?: string
          charges?: number | null
          configuration?: string | null
          created_at?: string
          criteres_respectes?: Json | null
          disponibilite?: string | null
          id?: string
          offre_id?: string | null
          pertinence_score?: number | null
          photos?: string[] | null
          points_a_verifier?: string[] | null
          prix?: number | null
          recherche_id?: string
          secteur_affiche?: string | null
          sent_at?: string | null
          statut?: Database["public"]["Enums"]["statut_proposition"]
          surface?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "proposition_agence_id_fkey"
            columns: ["agence_id"]
            isOneToOne: false
            referencedRelation: "agence"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proposition_offre_id_fkey"
            columns: ["offre_id"]
            isOneToOne: false
            referencedRelation: "offre"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proposition_recherche_id_fkey"
            columns: ["recherche_id"]
            isOneToOne: false
            referencedRelation: "lead_anonymise"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proposition_recherche_id_fkey"
            columns: ["recherche_id"]
            isOneToOne: false
            referencedRelation: "recherche"
            referencedColumns: ["id"]
          },
        ]
      }
      recherche: {
        Row: {
          activite: string | null
          budget_max: number | null
          created_at: string
          criteres_indispensables: string[] | null
          criteres_souhaites: string[] | null
          delai: string | null
          demandeur_id: string
          description: string | null
          diffusee_at: string | null
          diffusion: boolean
          id: string
          motif_cloture: string | null
          secteur_principal_id: string | null
          statut: Database["public"]["Enums"]["statut_recherche"]
          surface_minimale: number | null
          surface_souhaitee: number | null
          type_lieu: Database["public"]["Enums"]["type_lieu"] | null
          type_projet: Database["public"]["Enums"]["type_projet"] | null
          updated_at: string
          zone_principale: string | null
          zones_acceptees: string[] | null
        }
        Insert: {
          activite?: string | null
          budget_max?: number | null
          created_at?: string
          criteres_indispensables?: string[] | null
          criteres_souhaites?: string[] | null
          delai?: string | null
          demandeur_id: string
          description?: string | null
          diffusee_at?: string | null
          diffusion?: boolean
          id?: string
          motif_cloture?: string | null
          secteur_principal_id?: string | null
          statut?: Database["public"]["Enums"]["statut_recherche"]
          surface_minimale?: number | null
          surface_souhaitee?: number | null
          type_lieu?: Database["public"]["Enums"]["type_lieu"] | null
          type_projet?: Database["public"]["Enums"]["type_projet"] | null
          updated_at?: string
          zone_principale?: string | null
          zones_acceptees?: string[] | null
        }
        Update: {
          activite?: string | null
          budget_max?: number | null
          created_at?: string
          criteres_indispensables?: string[] | null
          criteres_souhaites?: string[] | null
          delai?: string | null
          demandeur_id?: string
          description?: string | null
          diffusee_at?: string | null
          diffusion?: boolean
          id?: string
          motif_cloture?: string | null
          secteur_principal_id?: string | null
          statut?: Database["public"]["Enums"]["statut_recherche"]
          surface_minimale?: number | null
          surface_souhaitee?: number | null
          type_lieu?: Database["public"]["Enums"]["type_lieu"] | null
          type_projet?: Database["public"]["Enums"]["type_projet"] | null
          updated_at?: string
          zone_principale?: string | null
          zones_acceptees?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "recherche_demandeur_id_fkey"
            columns: ["demandeur_id"]
            isOneToOne: false
            referencedRelation: "demandeur"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recherche_secteur_principal_id_fkey"
            columns: ["secteur_principal_id"]
            isOneToOne: false
            referencedRelation: "secteur"
            referencedColumns: ["id"]
          },
        ]
      }
      recherche_secteur_accepte: {
        Row: {
          recherche_id: string
          secteur_id: string
        }
        Insert: {
          recherche_id: string
          secteur_id: string
        }
        Update: {
          recherche_id?: string
          secteur_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "recherche_secteur_accepte_recherche_id_fkey"
            columns: ["recherche_id"]
            isOneToOne: false
            referencedRelation: "lead_anonymise"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recherche_secteur_accepte_recherche_id_fkey"
            columns: ["recherche_id"]
            isOneToOne: false
            referencedRelation: "recherche"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "recherche_secteur_accepte_secteur_id_fkey"
            columns: ["secteur_id"]
            isOneToOne: false
            referencedRelation: "secteur"
            referencedColumns: ["id"]
          },
        ]
      }
      secteur: {
        Row: {
          actif: boolean
          code: string | null
          created_at: string
          id: string
          niveau: Database["public"]["Enums"]["niveau_secteur"]
          nom: string
          parent_id: string | null
        }
        Insert: {
          actif?: boolean
          code?: string | null
          created_at?: string
          id?: string
          niveau: Database["public"]["Enums"]["niveau_secteur"]
          nom: string
          parent_id?: string | null
        }
        Update: {
          actif?: boolean
          code?: string | null
          created_at?: string
          id?: string
          niveau?: Database["public"]["Enums"]["niveau_secteur"]
          nom?: string
          parent_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "secteur_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "secteur"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      coordonnees_agence_debloquees: {
        Row: {
          contact_nom: string | null
          email: string | null
          mise_en_relation_id: string | null
          nom: string | null
          site_web: string | null
          telephone: string | null
        }
        Relationships: []
      }
      coordonnees_demandeur_debloquees: {
        Row: {
          email: string | null
          entreprise: string | null
          mise_en_relation_id: string | null
          nom: string | null
          telephone: string | null
        }
        Relationships: []
      }
      lead_anonymise: {
        Row: {
          activite: string | null
          budget_max: number | null
          created_at: string | null
          criteres_indispensables: string[] | null
          criteres_souhaites: string[] | null
          delai: string | null
          description: string | null
          id: string | null
          surface_minimale: number | null
          surface_souhaitee: number | null
          type_lieu: Database["public"]["Enums"]["type_lieu"] | null
          type_projet: Database["public"]["Enums"]["type_projet"] | null
          zone_principale: string | null
          zones_acceptees: string[] | null
        }
        Insert: {
          activite?: string | null
          budget_max?: number | null
          created_at?: string | null
          criteres_indispensables?: string[] | null
          criteres_souhaites?: string[] | null
          delai?: string | null
          description?: string | null
          id?: string | null
          surface_minimale?: number | null
          surface_souhaitee?: number | null
          type_lieu?: Database["public"]["Enums"]["type_lieu"] | null
          type_projet?: Database["public"]["Enums"]["type_projet"] | null
          zone_principale?: string | null
          zones_acceptees?: string[] | null
        }
        Update: {
          activite?: string | null
          budget_max?: number | null
          created_at?: string | null
          criteres_indispensables?: string[] | null
          criteres_souhaites?: string[] | null
          delai?: string | null
          description?: string | null
          id?: string | null
          surface_minimale?: number | null
          surface_souhaitee?: number | null
          type_lieu?: Database["public"]["Enums"]["type_lieu"] | null
          type_projet?: Database["public"]["Enums"]["type_projet"] | null
          zone_principale?: string | null
          zones_acceptees?: string[] | null
        }
        Relationships: []
      }
      proposition_anonymisee: {
        Row: {
          agence_affichee: string | null
          charges: number | null
          configuration: string | null
          criteres_respectes: Json | null
          disponibilite: string | null
          id: string | null
          pertinence_score: number | null
          photos: string[] | null
          points_a_verifier: string[] | null
          prix: number | null
          recherche_id: string | null
          secteur_affiche: string | null
          sent_at: string | null
          statut: Database["public"]["Enums"]["statut_proposition"] | null
          surface: number | null
        }
        Relationships: [
          {
            foreignKeyName: "proposition_recherche_id_fkey"
            columns: ["recherche_id"]
            isOneToOne: false
            referencedRelation: "lead_anonymise"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "proposition_recherche_id_fkey"
            columns: ["recherche_id"]
            isOneToOne: false
            referencedRelation: "recherche"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      diffuser_recherche: { Args: { p_recherche: string }; Returns: undefined }
      est_admin: { Args: never; Returns: boolean }
      mon_agence_id: { Args: never; Returns: string }
      mon_demandeur_id: { Args: never; Returns: string }
      refuser_agence: { Args: { p_agence: string }; Returns: undefined }
      secteur_et_ancetres: { Args: { sect_id: string }; Returns: string[] }
      secteur_et_descendants: { Args: { sect_id: string }; Returns: string[] }
      suspendre_agence: { Args: { p_agence: string }; Returns: undefined }
      suspendre_diffusion: { Args: { p_recherche: string }; Returns: undefined }
      valider_agence: { Args: { p_agence: string }; Returns: undefined }
      valider_recherche: { Args: { p_recherche: string }; Returns: undefined }
    }
    Enums: {
      niveau_secteur: "agglo" | "commune" | "quartier"
      role_utilisateur: "demandeur" | "agence" | "admin"
      statut_agence:
        | "demande_recue"
        | "en_verification"
        | "validee"
        | "refusee"
        | "suspendue"
      statut_mise_en_relation:
        | "demandee"
        | "telephone_verifie"
        | "paiement_agence_en_cours"
        | "confirmee"
        | "bloquee_paiement_echoue"
        | "annulee"
      statut_offre:
        | "uploadee"
        | "extraction_en_cours"
        | "a_completer"
        | "proposable"
        | "non_envoyable"
        | "doublon_detecte"
        | "envoyee"
        | "retiree"
      statut_paiement:
        | "moyen_absent"
        | "moyen_actif"
        | "paiement_en_cours"
        | "paiement_reussi"
        | "paiement_echoue"
        | "en_attente_regularisation"
        | "annule"
      statut_precision: "demandee" | "repondue" | "en_retard" | "cloturee"
      statut_proposition:
        | "preparee"
        | "envoyee"
        | "consultee"
        | "precision_demandee"
        | "precision_repondue"
        | "declinee"
        | "mise_en_relation_demandee"
        | "mise_en_relation_confirmee"
        | "retiree"
        | "non_disponible"
      statut_recherche:
        | "brouillon"
        | "email_a_confirmer"
        | "en_revue"
        | "active"
        | "en_pause"
        | "cloturee"
        | "archivee"
      type_lieu: "bureau" | "cabinet" | "local_pro" | "autre"
      type_projet: "location" | "achat" | "les_deux"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      niveau_secteur: ["agglo", "commune", "quartier"],
      role_utilisateur: ["demandeur", "agence", "admin"],
      statut_agence: [
        "demande_recue",
        "en_verification",
        "validee",
        "refusee",
        "suspendue",
      ],
      statut_mise_en_relation: [
        "demandee",
        "telephone_verifie",
        "paiement_agence_en_cours",
        "confirmee",
        "bloquee_paiement_echoue",
        "annulee",
      ],
      statut_offre: [
        "uploadee",
        "extraction_en_cours",
        "a_completer",
        "proposable",
        "non_envoyable",
        "doublon_detecte",
        "envoyee",
        "retiree",
      ],
      statut_paiement: [
        "moyen_absent",
        "moyen_actif",
        "paiement_en_cours",
        "paiement_reussi",
        "paiement_echoue",
        "en_attente_regularisation",
        "annule",
      ],
      statut_precision: ["demandee", "repondue", "en_retard", "cloturee"],
      statut_proposition: [
        "preparee",
        "envoyee",
        "consultee",
        "precision_demandee",
        "precision_repondue",
        "declinee",
        "mise_en_relation_demandee",
        "mise_en_relation_confirmee",
        "retiree",
        "non_disponible",
      ],
      statut_recherche: [
        "brouillon",
        "email_a_confirmer",
        "en_revue",
        "active",
        "en_pause",
        "cloturee",
        "archivee",
      ],
      type_lieu: ["bureau", "cabinet", "local_pro", "autre"],
      type_projet: ["location", "achat", "les_deux"],
    },
  },
} as const
