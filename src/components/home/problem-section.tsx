import Image from "next/image";

const PHOTOS = [
  {
    src: "/images/acces-autonome/probleme-cles-perdues.png",
    alt: "Clés laissées dans une serrure de porte de logement",
  },
  {
    src: "/images/acces-autonome/probleme-boite-cles-visible.png",
    alt: "Boîtes à clés visibles accrochées près d’une entrée d’immeuble",
  },
  {
    src: "/images/acces-autonome/probleme-interphone.png",
    alt: "Interphone d’immeuble avec boutons de sonnerie et badge, sans code d’accès",
  },
];

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
          {PHOTOS.map((photo) => (
            <div key={photo.src} className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 16vw, 30vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
