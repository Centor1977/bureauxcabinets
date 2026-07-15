const SECTIONS = [
  {
    title: "Quelles données sont collectées",
    text: "Dans le cadre de votre demande, nous collectons les informations que vous transmettez via le formulaire : type de bien, besoin et accès concernés, ville, délai souhaité, nombre de logements, photo facultative, coordonnées (nom, téléphone, email) et créneaux de rappel.",
  },
  {
    title: "Pourquoi ces données sont collectées",
    text: "Ces informations servent à qualifier votre demande et à l’orienter vers un professionnel vérifié capable d’y répondre, dans votre zone et selon votre projet.",
  },
  {
    title: "Utilisation des photos",
    text: "Les photos transmises servent uniquement à comprendre votre porte, serrure ou interphone afin de faciliter la qualification de votre demande et l’estimation par un professionnel.",
  },
  {
    title: "Transmission de vos coordonnées",
    text: "Vos coordonnées peuvent être transmises à un ou plusieurs professionnels vérifiés uniquement dans le cadre de votre demande.",
  },
  {
    title: "Durée de conservation",
    text: "[à compléter]",
  },
  {
    title: "Vos droits",
    text: "Conformément à la réglementation applicable, vous disposez d’un droit d’accès, de rectification et de suppression des données vous concernant.",
  },
  {
    title: "Exercer vos droits",
    text: "Pour toute question ou pour exercer vos droits, vous pouvez nous contacter via la page Contact.",
  },
];

export default function ConfidentialitePage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <h1 className="text-3xl font-semibold tracking-tight text-aal-navy sm:text-4xl">
        Politique de confidentialité
      </h1>

      <div className="mt-8 flex flex-col gap-8">
        {SECTIONS.map((section) => (
          <div key={section.title}>
            <h2 className="text-base font-semibold text-aal-navy">
              {section.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-aal-navy/70">
              {section.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
