"use client";

import { useEffect, useState } from "react";
import type { SecteurRef } from "@/lib/recherche/types";

const inputClass =
  "w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-950 outline-none focus:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-zinc-600";

function useSecteurSearch(query: string) {
  const [results, setResults] = useState<SecteurRef[]>([]);
  const trimmed = query.trim();

  useEffect(() => {
    if (trimmed.length < 2) {
      return;
    }
    const controller = new AbortController();
    const timeout = setTimeout(async () => {
      try {
        const res = await fetch(
          `/api/secteurs?q=${encodeURIComponent(trimmed)}`,
          { signal: controller.signal }
        );
        const data: { secteurs: SecteurRef[] } = await res.json();
        setResults(data.secteurs ?? []);
      } catch {
        // requête abandonnée ou erreur réseau : on ignore
      }
    }, 250);

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [trimmed]);

  return trimmed.length < 2 ? [] : results;
}

function formatSecteur(secteur: SecteurRef): string {
  return secteur.niveau === "quartier" && secteur.parentNom
    ? `${secteur.nom} (${secteur.parentNom})`
    : secteur.nom;
}

export function SecteurPrincipalField({
  value,
  onChange,
}: {
  value: SecteurRef | null;
  onChange: (secteur: SecteurRef | null) => void;
}) {
  const [query, setQuery] = useState(value ? formatSecteur(value) : "");
  const [open, setOpen] = useState(false);
  const results = useSecteurSearch(query);

  return (
    <div className="relative">
      <input
        className={inputClass}
        placeholder="Rechercher une commune ou un quartier…"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
          if (value) onChange(null);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
      />
      {open && results.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full rounded-lg border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          {results.map((secteur) => (
            <li key={secteur.id}>
              <button
                type="button"
                className="block w-full px-3 py-2 text-left text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  onChange(secteur);
                  setQuery(formatSecteur(secteur));
                  setOpen(false);
                }}
              >
                {formatSecteur(secteur)}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function SecteursAcceptesField({
  value,
  onChange,
  exclude,
}: {
  value: SecteurRef[];
  onChange: (secteurs: SecteurRef[]) => void;
  exclude?: string | null;
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const results = useSecteurSearch(query);
  const selectedIds = new Set(value.map((s) => s.id));
  const suggestions = results.filter(
    (s) => s.id !== exclude && !selectedIds.has(s.id)
  );

  return (
    <div className="flex flex-col gap-2">
      {value.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {value.map((secteur) => (
            <li key={secteur.id}>
              <button
                type="button"
                onClick={() => onChange(value.filter((s) => s.id !== secteur.id))}
                className="flex items-center gap-1 rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
              >
                {formatSecteur(secteur)}
                <span aria-hidden>×</span>
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="relative">
        <input
          className={inputClass}
          placeholder="Ajouter une zone également acceptée…"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
        />
        {open && suggestions.length > 0 && (
          <ul className="absolute z-10 mt-1 w-full rounded-lg border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            {suggestions.map((secteur) => (
              <li key={secteur.id}>
                <button
                  type="button"
                  className="block w-full px-3 py-2 text-left text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => {
                    onChange([...value, secteur]);
                    setQuery("");
                    setOpen(false);
                  }}
                >
                  {formatSecteur(secteur)}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
