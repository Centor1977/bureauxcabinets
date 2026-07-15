export function FinalCtaSection() {
  return (
    <section className="bg-aal-navy">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Vous voulez arrêter de gérer les clés à la main ?
        </h2>
        <p className="mt-4 text-base leading-7 text-aal-offwhite/80">
          Décrivez votre logement une fois, ajoutez une photo si vous le
          souhaitez, et recevez le rappel d’un professionnel vérifié pour
          identifier la solution d’accès autonome adaptée à votre bien.
        </p>
        <a
          href="#formulaire"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-aal-teal px-6 text-sm font-semibold text-white transition-colors hover:bg-aal-teal-dark"
        >
          Recevoir une estimation pour mon logement
        </a>
      </div>
    </section>
  );
}
