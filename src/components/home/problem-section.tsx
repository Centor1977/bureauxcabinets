import { PlaceholderPhoto } from "@/components/ui/placeholder-photo";

const PHOTO_SLOTS = ["Porte d’entrée", "Trousseau de clés", "Interphone d’immeuble"];

export function ProblemSection() {
  return (
    <section className="bg-aal-offwhite">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-aal-navy sm:text-4xl">
            Les clés deviennent un problème dès que vous gérez vos arrivées
            à distance.
          </h2>
          <p className="mt-4 text-base leading-7 text-aal-navy/70">
            Arrivées tardives, ménage, prestataires, voyageurs qui perdent
            les clés, boîte à clés visible, interphone d’immeuble : la
            gestion des accès devient vite un point de friction. Accès
            Autonome Lille vous aide à identifier la solution adaptée à
            votre logement et à être rappelé par un professionnel vérifié.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {PHOTO_SLOTS.map((label) => (
            <PlaceholderPhoto key={label} alt={label} className="aspect-[3/4]" />
          ))}
        </div>
      </div>
    </section>
  );
}
