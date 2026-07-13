import { NextResponse, type NextRequest } from "next/server";
import { createServiceClient } from "@/lib/supabase/service";

// Public search endpoint over `secteur` reference data (place names only,
// no PII). Reads with the service role because the RLS policy on `secteur`
// only grants SELECT to `authenticated`, and this needs to work on the D2
// form before the demandeur has a session.
export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q")?.trim() ?? "";

  if (q.length < 2) {
    return NextResponse.json({ secteurs: [] });
  }

  const supabase = createServiceClient();
  const { data, error } = await supabase
    .from("secteur")
    .select("id, nom, niveau, parent_id")
    .eq("actif", true)
    .in("niveau", ["commune", "quartier"])
    .ilike("nom", `%${q}%`)
    .order("niveau", { ascending: false })
    .order("nom")
    .limit(20);

  if (error) {
    console.error("secteurs search error", error);
    return NextResponse.json({ secteurs: [] }, { status: 500 });
  }

  // Resolve parent names in a second query rather than a self-join embed:
  // self-referencing PostgREST embeds on `secteur` can't be reliably
  // disambiguated (forward "my parent" vs reverse "my children").
  const parentIds = [...new Set(data.map((s) => s.parent_id).filter(Boolean))] as string[];

  const parentNomById = new Map<string, string>();
  if (parentIds.length > 0) {
    const { data: parents } = await supabase
      .from("secteur")
      .select("id, nom")
      .in("id", parentIds);
    for (const parent of parents ?? []) {
      parentNomById.set(parent.id, parent.nom);
    }
  }

  const secteurs = data.map((s) => ({
    id: s.id,
    nom: s.nom,
    niveau: s.niveau,
    parentNom: s.parent_id ? (parentNomById.get(s.parent_id) ?? null) : null,
  }));

  return NextResponse.json({ secteurs });
}
