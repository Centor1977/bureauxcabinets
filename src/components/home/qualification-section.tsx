import { ClipboardIcon, TargetIcon, UserCheckIcon } from "@/components/icons";

const POINTS = [
  { icon: ClipboardIcon, label: "Un seul formulaire" },
  { icon: TargetIcon, label: "Une demande qualifiée" },
  { icon: UserCheckIcon, label: "Un professionnel adapté" },
];

export function QualificationSection() {
  return (
    <section className="bg-aal-warmgray">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-aal-navy sm:text-4xl">
          Évitez d’appeler des installateurs au hasard.
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-aal-navy/70">
          Chaque porte, chaque immeuble et chaque usage ont leurs
          contraintes. Selon votre situation, la bonne solution peut être
          un simple code, une serrure connectée, un interphone connecté,
          une ouverture à distance ou une installation plus complète.
          Accès Autonome Lille qualifie votre demande pour l’orienter vers
          un professionnel adapté.
        </p>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3">
          {POINTS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-aal-teal shadow-sm">
                <Icon />
              </span>
              <p className="text-sm font-medium text-aal-navy">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
