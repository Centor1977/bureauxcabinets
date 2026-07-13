import type { Metadata } from "next";
import { NouvelleRechercheForm } from "./nouvelle-recherche-form";

export const metadata: Metadata = {
  title: "Décrire ma recherche — Bureaux & Cabinets",
  description:
    "Décrivez votre recherche de bureau ou de cabinet professionnel en quelques minutes.",
};

export default function NouvelleReecherchePage() {
  return (
    <div className="flex flex-1 flex-col bg-white dark:bg-black">
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-6 py-16 sm:px-8">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Décrire ma recherche
        </h1>
        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          Quelques questions pour comprendre votre besoin, puis vos
          coordonnées pour activer votre recherche.
        </p>
        <NouvelleRechercheForm />
      </main>
    </div>
  );
}
