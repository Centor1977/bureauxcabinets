import Link from "next/link";

export default function AuthErrorPage() {
  return (
    <div className="flex flex-1 flex-col bg-white dark:bg-black">
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-start justify-center px-6 py-16 sm:px-8">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Ce lien n&rsquo;est plus valable
        </h1>
        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          Le lien de confirmation a expiré ou a déjà été utilisé. Vous pouvez
          recommencer votre demande.
        </p>
        <Link
          href="/recherche/nouvelle"
          className="mt-6 flex h-11 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-white dark:bg-zinc-50 dark:text-zinc-950"
        >
          Décrire ma recherche
        </Link>
      </main>
    </div>
  );
}
