import Image from "next/image";
import { CheckCircleIcon } from "@/components/icons";
import type { LandingImage } from "@/lib/landing/types";

type LandingProblemProps = {
  title: string;
  text: string;
  image?: LandingImage;
  points?: string[];
};

function PointsList({ points }: { points: string[] }) {
  return (
    <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {points.map((point) => (
        <li key={point} className="flex items-start gap-2 text-sm leading-6 text-aal-navy/80">
          <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-aal-teal" />
          {point}
        </li>
      ))}
    </ul>
  );
}

// Bloc "problème" spécifique à l'intention. Reprend la structure de
// src/components/home/problem-section.tsx (texte + visuel) lorsqu'une image
// est fournie, ou un format centré façon qualification-section sinon.
export function LandingProblem({ title, text, image, points }: LandingProblemProps) {
  if (image) {
    return (
      <section className="bg-aal-offwhite">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-aal-navy sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-7 text-aal-navy/70">{text}</p>
            {points ? <PointsList points={points} /> : null}
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-aal-offwhite">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-aal-navy sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-7 text-aal-navy/70">{text}</p>
        {points ? <PointsList points={points} /> : null}
      </div>
    </section>
  );
}
