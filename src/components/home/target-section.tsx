import { PlaceholderPhoto } from "@/components/ui/placeholder-photo";

const USAGES = [
  "Locations de courte durée",
  "Investisseurs en location meublée",
  "Gestionnaires & conciergeries",
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
          {USAGES.map((label) => (
            <div key={label} className="flex flex-col gap-3">
              <PlaceholderPhoto alt={label} className="aspect-[4/3]" />
              <p className="text-center text-sm font-medium text-aal-navy">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
