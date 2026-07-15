import Link from "next/link";
import { CheckCircleIcon } from "@/components/icons";

export default function MerciPage() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-aal-warmgray text-aal-teal">
        <CheckCircleIcon className="h-8 w-8" />
      </span>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-aal-navy sm:text-4xl">
        Votre demande a bien été reçue.
      </h1>

      <p className="mt-4 text-base leading-7 text-aal-navy/70">
        Nous allons qualifier votre besoin et l’orienter vers un
        professionnel vérifié adapté à votre projet. Il pourra vous
        rappeler sur les créneaux indiqués pour confirmer la faisabilité
        et vous proposer une estimation ou un devis.
      </p>

      <p className="mt-4 text-sm text-aal-navy/50">
        Les créneaux indiqués facilitent le rappel mais ne constituent pas
        un rendez-vous confirmé.
      </p>

      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center rounded-full bg-aal-teal px-6 text-sm font-semibold text-white transition-colors hover:bg-aal-teal-dark"
        >
          Retour à l’accueil
        </Link>
        <Link
          href="/contact"
          className="inline-flex h-12 items-center justify-center px-2 text-sm font-medium text-aal-navy/70 hover:text-aal-navy"
        >
          Nous contacter
        </Link>
      </div>
    </div>
  );
}
