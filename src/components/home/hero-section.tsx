import Image from "next/image";
import Link from "next/link";
import { LeadFormCard } from "@/components/lead-form/lead-form-card";

const REASSURANCES = [
  "Gratuit",
  "Sans engagement",
  "Professionnels vérifiés",
  "Logements meublés & gestion à distance",
];

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden bg-aal-navy">
      <Image
        src="/images/acces-autonome/hero-lille-entree-smartphone.png"
        alt="Entrée d’immeuble à Lille avec interphone et ouverture à distance par smartphone"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[52%_58%] sm:object-[55%_55%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-aal-navy/90 via-aal-navy/70 to-aal-navy/40 sm:bg-gradient-to-r sm:from-aal-navy/85 sm:via-aal-navy/60 sm:to-aal-navy/25" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-24">
        <div className="flex flex-col items-start gap-6">
          <span className="rounded-full border border-aal-teal/50 bg-aal-teal/10 px-4 py-1.5 text-sm font-medium text-aal-teal">
            Lille &amp; métropole
          </span>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Fini les remises de clés pour vos logements meublés à Lille.
          </h1>

          <p className="max-w-xl text-base leading-7 text-aal-offwhite/80 sm:text-lg">
            Décrivez votre logement, votre porte et votre besoin. Un
            professionnel vérifié vous rappelle pour confirmer la solution
            adaptée — code, badge, serrure connectée, interphone ou
            ouverture à distance — et vous proposer une estimation ou un
            devis.
          </p>

          <ul className="flex flex-wrap gap-3">
            {REASSURANCES.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#formulaire"
              className="inline-flex h-12 items-center justify-center rounded-full bg-aal-teal px-6 text-sm font-semibold text-white transition-colors hover:bg-aal-teal-dark"
            >
              Recevoir une estimation pour mon logement
            </a>
            <Link
              href="/#comment-ca-marche"
              className="inline-flex h-12 items-center justify-center px-2 text-sm font-medium text-white/80 hover:text-white"
            >
              Voir comment ça marche →
            </Link>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <LeadFormCard />
        </div>
      </div>
    </section>
  );
}
