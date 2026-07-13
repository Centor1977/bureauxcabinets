"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { TYPE_LIEU_LABELS, TYPE_PROJET_LABELS } from "@/lib/recherche/labels";
import {
  SecteurPrincipalField,
  SecteursAcceptesField,
} from "./secteur-autocomplete";
import type {
  DemandeurPayload,
  PendingRecherche,
  RecherchePayload,
  TypeLieu,
  TypeProjet,
} from "@/lib/recherche/types";

const STEPS = ["Projet", "Localisation", "Critères", "Coordonnées"] as const;

const EMPTY_RECHERCHE: RecherchePayload = {
  type_projet: null,
  type_lieu: null,
  activite: "",
  secteur_principal: null,
  zone_principale: "",
  secteurs_acceptes: [],
  surface_souhaitee: null,
  surface_minimale: null,
  budget_max: null,
  delai: "",
  criteres_indispensables: [],
  criteres_souhaites: [],
  description: "",
};

const EMPTY_DEMANDEUR: DemandeurPayload = {
  nom: "",
  email: "",
  telephone: "",
  entreprise: "",
};

function toNullableNumber(value: string): number | null {
  if (value.trim() === "") return null;
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function toList(value: string): string[] {
  return value
    .split(/\r?\n|,/)
    .map((s) => s.trim())
    .filter(Boolean);
}

const inputClass =
  "w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-950 outline-none focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-zinc-600";

const labelClass =
  "text-sm font-medium text-zinc-950 dark:text-zinc-50";

export function NouvelleRechercheForm() {
  const [step, setStep] = useState(0);
  const [recherche, setRecherche] = useState<RecherchePayload>(EMPTY_RECHERCHE);
  const [demandeur, setDemandeur] = useState<DemandeurPayload>(EMPTY_DEMANDEUR);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [sentTo, setSentTo] = useState<string | null>(null);

  function validateStep(current: number): string | null {
    if (current === 0) {
      if (!recherche.type_projet) return "Choisissez un type de projet.";
      if (!recherche.type_lieu) return "Choisissez un type de bien.";
    }
    if (current === 1) {
      if (!recherche.secteur_principal)
        return "Choisissez la zone géographique principale dans la liste.";
    }
    if (current === 3) {
      if (!demandeur.nom.trim()) return "Indiquez votre nom.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(demandeur.email))
        return "Indiquez un email valide.";
    }
    return null;
  }

  function goNext() {
    const message = validateStep(step);
    if (message) {
      setError(message);
      return;
    }
    setError(null);
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  function goBack() {
    setError(null);
    setStep((s) => Math.max(s - 1, 0));
  }

  async function handleSubmit() {
    const message = validateStep(3);
    if (message) {
      setError(message);
      return;
    }
    setError(null);
    setPending(true);

    const pendingRecherche: PendingRecherche = {
      demandeur: {
        nom: demandeur.nom.trim(),
        email: demandeur.email.trim(),
        telephone: demandeur.telephone?.trim() || null,
        entreprise: demandeur.entreprise?.trim() || null,
      },
      recherche,
    };

    const supabase = createClient();
    const { error: otpError } = await supabase.auth.signInWithOtp({
      email: pendingRecherche.demandeur.email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/confirm?next=/recherche`,
        data: { pending_recherche: pendingRecherche },
      },
    });

    setPending(false);

    if (otpError) {
      setError(
        "Impossible d'envoyer l'email de confirmation pour le moment. Réessayez dans quelques instants."
      );
      return;
    }

    setSentTo(pendingRecherche.demandeur.email);
  }

  if (sentTo) {
    return (
      <div className="mt-12 flex flex-col gap-3 rounded-2xl border border-zinc-100 bg-zinc-50 p-8 dark:border-zinc-900 dark:bg-zinc-950">
        <h2 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
          Vérifiez votre boîte mail
        </h2>
        <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          Nous avons envoyé un lien de confirmation à <strong>{sentTo}</strong>.
          Cliquez dessus pour activer votre recherche.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10 flex flex-col gap-8">
      <ol className="flex gap-4 text-sm">
        {STEPS.map((label, index) => (
          <li
            key={label}
            className={
              index === step
                ? "font-semibold text-zinc-950 dark:text-zinc-50"
                : "text-zinc-400 dark:text-zinc-600"
            }
          >
            {index + 1}. {label}
          </li>
        ))}
      </ol>

      {step === 0 && (
        <div className="flex flex-col gap-5">
          <fieldset className="flex flex-col gap-2">
            <legend className={labelClass}>Type de projet</legend>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(TYPE_PROJET_LABELS) as TypeProjet[]).map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setRecherche((r) => ({ ...r, type_projet: value }))}
                  className={`rounded-full border px-4 py-2 text-sm ${
                    recherche.type_projet === value
                      ? "border-zinc-950 bg-zinc-950 text-white dark:border-zinc-50 dark:bg-zinc-50 dark:text-zinc-950"
                      : "border-zinc-200 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
                  }`}
                >
                  {TYPE_PROJET_LABELS[value]}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="flex flex-col gap-2">
            <legend className={labelClass}>Type de bien</legend>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(TYPE_LIEU_LABELS) as TypeLieu[]).map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setRecherche((r) => ({ ...r, type_lieu: value }))}
                  className={`rounded-full border px-4 py-2 text-sm ${
                    recherche.type_lieu === value
                      ? "border-zinc-950 bg-zinc-950 text-white dark:border-zinc-50 dark:bg-zinc-50 dark:text-zinc-950"
                      : "border-zinc-200 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
                  }`}
                >
                  {TYPE_LIEU_LABELS[value]}
                </button>
              ))}
            </div>
          </fieldset>

          <label className="flex flex-col gap-2">
            <span className={labelClass}>Activité (optionnel)</span>
            <input
              className={inputClass}
              placeholder="Ex : cabinet médical, agence de conseil…"
              value={recherche.activite ?? ""}
              onChange={(e) =>
                setRecherche((r) => ({ ...r, activite: e.target.value }))
              }
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className={labelClass}>Description (optionnel)</span>
            <textarea
              className={inputClass}
              rows={4}
              placeholder="Précisez votre contexte ou vos contraintes particulières."
              value={recherche.description ?? ""}
              onChange={(e) =>
                setRecherche((r) => ({ ...r, description: e.target.value }))
              }
            />
          </label>
        </div>
      )}

      {step === 1 && (
        <div className="flex flex-col gap-5">
          <label className="flex flex-col gap-2">
            <span className={labelClass}>Zone géographique principale</span>
            <SecteurPrincipalField
              value={recherche.secteur_principal}
              onChange={(secteur) =>
                setRecherche((r) => ({
                  ...r,
                  secteur_principal: secteur,
                  zone_principale: secteur?.nom ?? "",
                }))
              }
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className={labelClass}>Zones également acceptées (optionnel)</span>
            <SecteursAcceptesField
              value={recherche.secteurs_acceptes}
              exclude={recherche.secteur_principal?.id ?? null}
              onChange={(secteurs) =>
                setRecherche((r) => ({ ...r, secteurs_acceptes: secteurs }))
              }
            />
          </label>

          <div className="grid grid-cols-2 gap-4">
            <label className="flex flex-col gap-2">
              <span className={labelClass}>Surface souhaitée (m²)</span>
              <input
                className={inputClass}
                type="number"
                min={0}
                value={recherche.surface_souhaitee ?? ""}
                onChange={(e) =>
                  setRecherche((r) => ({
                    ...r,
                    surface_souhaitee: toNullableNumber(e.target.value),
                  }))
                }
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className={labelClass}>Surface minimale (m²)</span>
              <input
                className={inputClass}
                type="number"
                min={0}
                value={recherche.surface_minimale ?? ""}
                onChange={(e) =>
                  setRecherche((r) => ({
                    ...r,
                    surface_minimale: toNullableNumber(e.target.value),
                  }))
                }
              />
            </label>
          </div>

          <label className="flex flex-col gap-2">
            <span className={labelClass}>Budget maximum (€)</span>
            <input
              className={inputClass}
              type="number"
              min={0}
              value={recherche.budget_max ?? ""}
              onChange={(e) =>
                setRecherche((r) => ({
                  ...r,
                  budget_max: toNullableNumber(e.target.value),
                }))
              }
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className={labelClass}>Délai souhaité (optionnel)</span>
            <input
              className={inputClass}
              placeholder="Ex : dans les 3 mois"
              value={recherche.delai ?? ""}
              onChange={(e) => setRecherche((r) => ({ ...r, delai: e.target.value }))}
            />
          </label>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-5">
          <label className="flex flex-col gap-2">
            <span className={labelClass}>Critères indispensables (optionnel)</span>
            <textarea
              className={inputClass}
              rows={4}
              placeholder="Un critère par ligne : parking, accès PMR, fibre…"
              value={recherche.criteres_indispensables.join("\n")}
              onChange={(e) =>
                setRecherche((r) => ({
                  ...r,
                  criteres_indispensables: toList(e.target.value),
                }))
              }
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className={labelClass}>Critères souhaités (optionnel)</span>
            <textarea
              className={inputClass}
              rows={4}
              placeholder="Un critère par ligne : terrasse, proximité transports…"
              value={recherche.criteres_souhaites.join("\n")}
              onChange={(e) =>
                setRecherche((r) => ({
                  ...r,
                  criteres_souhaites: toList(e.target.value),
                }))
              }
            />
          </label>
        </div>
      )}

      {step === 3 && (
        <div className="flex flex-col gap-5">
          <label className="flex flex-col gap-2">
            <span className={labelClass}>Nom</span>
            <input
              className={inputClass}
              value={demandeur.nom}
              onChange={(e) => setDemandeur((d) => ({ ...d, nom: e.target.value }))}
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className={labelClass}>Email</span>
            <input
              className={inputClass}
              type="email"
              value={demandeur.email}
              onChange={(e) => setDemandeur((d) => ({ ...d, email: e.target.value }))}
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className={labelClass}>Téléphone (optionnel)</span>
            <input
              className={inputClass}
              type="tel"
              value={demandeur.telephone ?? ""}
              onChange={(e) =>
                setDemandeur((d) => ({ ...d, telephone: e.target.value }))
              }
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className={labelClass}>Entreprise (optionnel)</span>
            <input
              className={inputClass}
              value={demandeur.entreprise ?? ""}
              onChange={(e) =>
                setDemandeur((d) => ({ ...d, entreprise: e.target.value }))
              }
            />
          </label>
        </div>
      )}

      {error && (
        <p className="text-sm text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      )}

      <div className="flex justify-between">
        <button
          type="button"
          onClick={goBack}
          disabled={step === 0 || pending}
          className="rounded-full border border-zinc-200 px-5 py-2 text-sm font-medium text-zinc-950 disabled:opacity-40 dark:border-zinc-800 dark:text-zinc-50"
        >
          Précédent
        </button>

        {step < STEPS.length - 1 ? (
          <button
            type="button"
            onClick={goNext}
            className="rounded-full bg-zinc-950 px-5 py-2 text-sm font-medium text-white dark:bg-zinc-50 dark:text-zinc-950"
          >
            Suivant
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={pending}
            className="rounded-full bg-zinc-950 px-5 py-2 text-sm font-medium text-white disabled:opacity-60 dark:bg-zinc-50 dark:text-zinc-950"
          >
            {pending ? "Envoi…" : "Envoyer et confirmer par email"}
          </button>
        )}
      </div>
    </div>
  );
}
