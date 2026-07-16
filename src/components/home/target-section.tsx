import Image from "next/image";

const USAGES = [
  {
    label: "Locations de courte durée",
    src: "/images/acces-autonome/cible-location-courte-duree.png",
    alt: "Appartement meublé chaleureux adapté à la location courte durée",
  },
  {
    label: "Investisseurs en location meublée",
    src: "/images/acces-autonome/cible-investisseur-meuble.png",
    alt: "Façade d’immeuble résidentiel à Lille ou dans une ville du nord",
  },
  {
    label: "Gestionnaires & conciergeries",
    src: "/images/acces-autonome/cible-conciergerie-gestionnaire.png",
    alt: "Gestionnaire de logements meublés travaillant sur ordinateur",
  },
];

export function TargetSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-aal-navy sm:text-4xl">
            Pensé pour les logements meublés, la courte durée et la
            gestion à distance.
          </h2>
          <p className="mt-4 text-base leading-7 text-aal-navy/70">
            Accès Autonome Lille s’adresse d’abord aux propriétaires de
            logements meublés, locations de courte durée, conciergeries et
            biens gérés à distance à Lille métropole. Le service peut
            aussi concerner les bureaux, cabinets partagés et locaux
            professionnels lorsque plusieurs personnes doivent accéder au
            lieu sans multiplier les clés physiques.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {USAGES.map((usage) => (
            <div key={usage.label} className="flex flex-col gap-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={usage.src}
                  alt={usage.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="text-center text-sm font-medium text-aal-navy">
                {usage.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
