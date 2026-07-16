import { TrackedCtaLink } from "./tracked-cta-link";

type LandingFinalCtaProps = {
  title: string;
  text: string;
  ctaLabel: string;
  trackingPayload?: Record<string, string | undefined>;
};

// Même structure que src/components/home/final-cta-section.tsx. Le titre, le
// texte et le libellé du bouton reprennent le wording déjà validé du hero de
// la page (aucun texte nouveau introduit pour ce bloc).
export function LandingFinalCta({ title, text, ctaLabel, trackingPayload }: LandingFinalCtaProps) {
  return (
    <section className="bg-aal-navy">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-7 text-aal-offwhite/80">{text}</p>
        <TrackedCtaLink
          href="#formulaire"
          trackingPayload={{ ...trackingPayload, cta: "final_cta" }}
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-aal-teal px-6 text-sm font-semibold text-white transition-colors hover:bg-aal-teal-dark"
        >
          {ctaLabel}
        </TrackedCtaLink>
      </div>
    </section>
  );
}
