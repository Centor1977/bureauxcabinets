import Link from "next/link";
import { CheckCircleIcon } from "@/components/icons";

const CONTENU = [
  "Demandes qualifiées",
  "Zone Lille & métropole",
  "Serrure connectée",
  "Interphone connecté",
  "Code",
  "Badge",
  "Ouverture à distance",
  "Coordonnées transmises uniquement après accord et validation",
  "Contact pro",
];

export default function InstallateursPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <h1 className="text-3xl font-semibold tracking-tight text-aal-navy sm:text-4xl">
        Installateurs à Lille : recevez des demandes qualifiées d’accès
        autonome
      </h1>

      <p className="mt-4 text-base leading-7 text-aal-navy/70">
        Accès Autonome Lille met en relation des propriétaires de
        logements meublés, locations de courte durée, conciergeries et
        biens gérés à distance avec des professionnels capables
        d’installer des solutions d’accès autonome à Lille métropole.
      </p>

      <ul className="mt-8 flex flex-col gap-3">
        {CONTENU.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-aal-navy/80">
            <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-aal-teal" />
            {item}
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-aal-teal px-6 text-sm font-semibold text-white transition-colors hover:bg-aal-teal-dark"
      >
        Être contacté pour recevoir des demandes
      </Link>
    </div>
  );
}
