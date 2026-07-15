const STEPS = [
  {
    title: "Vous décrivez votre logement et votre besoin",
    text: "Type de bien, accès concerné, photo si possible et disponibilités de rappel.",
  },
  {
    title: "La demande est qualifiée",
    text: "Le besoin est analysé pour identifier la solution et le type de professionnel adaptés.",
  },
  {
    title: "Un professionnel vérifié vous rappelle",
    text: "Il confirme la faisabilité, échange avec vous et précise la solution possible.",
  },
  {
    title: "Vous obtenez une estimation ou un devis",
    text: "Vous recevez une proposition et choisissez librement si vous souhaitez poursuivre.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="comment-ca-marche" className="bg-aal-offwhite">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-aal-navy sm:text-4xl">
          Comment ça marche ?
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <div key={step.title} className="flex flex-col gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-aal-teal text-sm font-semibold text-white">
                {index + 1}
              </span>
              <h3 className="text-base font-semibold text-aal-navy">
                {step.title}
              </h3>
              <p className="text-sm leading-6 text-aal-navy/70">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
