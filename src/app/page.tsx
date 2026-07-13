import Link from "next/link";

const ETAPES = [
  {
    titre: "Décrivez votre projet",
    texte:
      "Type de bien, localisation, surface, budget, délai : renseignez vos critères en quelques minutes.",
  },
  {
    titre: "Confirmez votre email",
    texte: "Un lien de confirmation active votre recherche en toute sécurité.",
  },
  {
    titre: "Recevez des propositions",
    texte:
      "Nos agences partenaires vous transmettent des biens correspondant à votre recherche.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white dark:bg-black">
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-20 sm:px-8">
        <section className="flex flex-col gap-6">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
            Trouvez le bureau ou le cabinet professionnel qu&rsquo;il vous
            faut
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Décrivez votre recherche une seule fois. Nos agences partenaires
            vous transmettent des propositions correspondant à vos critères.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/recherche/nouvelle"
              className="flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-base font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              Décrire ma recherche
            </Link>
            <Link
              href="/recherche"
              className="flex h-12 items-center justify-center rounded-full border border-zinc-200 px-6 text-base font-medium text-zinc-950 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
            >
              Suivre ma recherche
            </Link>
          </div>
        </section>

        <section className="mt-20 grid gap-8 sm:grid-cols-3">
          {ETAPES.map((etape, index) => (
            <div key={etape.titre} className="flex flex-col gap-2">
              <span className="text-sm font-medium text-zinc-400 dark:text-zinc-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
                {etape.titre}
              </h2>
              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {etape.texte}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-20 rounded-2xl border border-zinc-100 bg-zinc-50 p-8 dark:border-zinc-900 dark:bg-zinc-950">
          <h2 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
            Vos coordonnées restent confidentielles
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Elles ne sont jamais communiquées à une agence sans votre accord
            explicite. Le service est gratuit pour les demandeurs.
          </p>
        </section>
      </main>
    </div>
  );
}
