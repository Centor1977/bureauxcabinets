import type { Metadata } from "next";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import {
  STATUT_RECHERCHE_LABELS,
  TYPE_LIEU_LABELS,
  TYPE_PROJET_LABELS,
} from "@/lib/recherche/labels";
import { ConnexionForm } from "./connexion-form";

export const metadata: Metadata = {
  title: "Mon espace recherche — Bureaux & Cabinets",
};

export default async function EspaceReecherchePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div className="flex flex-1 flex-col bg-white dark:bg-black">
        <main className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-6 py-16 sm:px-8">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            Suivre ma recherche
          </h1>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Recevez un lien de connexion par email pour accéder à votre
            espace.
          </p>
          <div className="mt-6">
            <ConnexionForm />
          </div>
        </main>
      </div>
    );
  }

  const { data: demandeur } = await supabase
    .from("demandeur")
    .select("id, nom")
    .eq("profil_id", user.id)
    .maybeSingle();

  const { data: recherches } = demandeur
    ? await supabase
        .from("recherche")
        .select("*")
        .eq("demandeur_id", demandeur.id)
        .order("created_at", { ascending: false })
    : { data: null };

  return (
    <div className="flex flex-1 flex-col bg-white dark:bg-black">
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-6 py-16 sm:px-8">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          {demandeur?.nom ? `Bonjour ${demandeur.nom}` : "Mon espace recherche"}
        </h1>

        {!recherches || recherches.length === 0 ? (
          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-zinc-100 bg-zinc-50 p-8 dark:border-zinc-900 dark:bg-zinc-950">
            <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              Vous n&rsquo;avez pas encore de recherche en cours.
            </p>
            <Link
              href="/recherche/nouvelle"
              className="flex h-11 w-fit items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white dark:bg-zinc-50 dark:text-zinc-950"
            >
              Décrire ma recherche
            </Link>
          </div>
        ) : (
          <ul className="mt-8 flex flex-col gap-4">
            {recherches.map((r) => {
              const statut = STATUT_RECHERCHE_LABELS[r.statut];
              return (
                <li
                  key={r.id}
                  className="flex flex-col gap-2 rounded-2xl border border-zinc-100 p-6 dark:border-zinc-900"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
                      {r.zone_principale || "Recherche"}
                      {r.type_lieu ? ` — ${TYPE_LIEU_LABELS[r.type_lieu]}` : ""}
                    </h2>
                    <span className="whitespace-nowrap rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
                      {statut.label}
                    </span>
                  </div>
                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {statut.description}
                  </p>
                  <dl className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {r.type_projet && (
                      <>
                        <dt className="text-zinc-400 dark:text-zinc-600">Projet</dt>
                        <dd>{TYPE_PROJET_LABELS[r.type_projet]}</dd>
                      </>
                    )}
                    {r.budget_max && (
                      <>
                        <dt className="text-zinc-400 dark:text-zinc-600">
                          Budget max
                        </dt>
                        <dd>{r.budget_max.toLocaleString("fr-FR")} €</dd>
                      </>
                    )}
                  </dl>
                </li>
              );
            })}
          </ul>
        )}
      </main>
    </div>
  );
}
