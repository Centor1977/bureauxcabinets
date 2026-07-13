import type { EmailOtpType } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import { type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";
import type { PendingRecherche } from "@/lib/recherche/types";

// Nécessite que le template d'email "Magic Link" / "Confirm signup" (Supabase
// Dashboard > Authentication > Email Templates) pointe vers cette route avec
// {{ .TokenHash }}, ex :
//   {{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=email&next=/recherche

function isPendingRecherche(value: unknown): value is PendingRecherche {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return typeof v.demandeur === "object" && typeof v.recherche === "object";
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/recherche";

  if (!token_hash || !type) {
    redirect("/auth/erreur");
  }

  const supabase = await createClient();

  const { error: verifyError } = await supabase.auth.verifyOtp({
    type,
    token_hash,
  });

  if (verifyError) {
    redirect("/auth/erreur");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const pending = isPendingRecherche(user.user_metadata?.pending_recherche)
      ? (user.user_metadata.pending_recherche as PendingRecherche)
      : null;

    const { data: existingDemandeur } = await supabase
      .from("demandeur")
      .select("id")
      .eq("profil_id", user.id)
      .maybeSingle();

    if (pending && !existingDemandeur) {
      const { data: demandeur, error: demandeurError } = await supabase
        .from("demandeur")
        .insert({
          profil_id: user.id,
          nom: pending.demandeur.nom,
          email: pending.demandeur.email,
          telephone: pending.demandeur.telephone,
          entreprise: pending.demandeur.entreprise,
        })
        .select("id")
        .single();

      if (!demandeurError && demandeur) {
        const { secteur_principal, secteurs_acceptes, ...rechercheFields } =
          pending.recherche;

        const { data: recherche } = await supabase
          .from("recherche")
          .insert({
            demandeur_id: demandeur.id,
            ...rechercheFields,
            secteur_principal_id: secteur_principal?.id ?? null,
          })
          .select("id")
          .single();

        if (recherche) {
          if (secteurs_acceptes.length > 0) {
            await supabase.from("recherche_secteur_accepte").insert(
              secteurs_acceptes.map((secteur) => ({
                recherche_id: recherche.id,
                secteur_id: secteur.id,
              }))
            );
          }

          await supabase
            .from("recherche")
            .update({ statut: "en_revue" })
            .eq("id", recherche.id);
        }
      }

      await supabase.auth.updateUser({ data: { pending_recherche: null } });
    }
  }

  redirect(next);
}
