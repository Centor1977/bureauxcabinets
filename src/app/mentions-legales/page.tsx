const MENTIONS = [
  { label: "Nom société", value: "[à compléter]" },
  { label: "Forme juridique", value: "[à compléter]" },
  { label: "Adresse", value: "[à compléter]" },
  { label: "SIRET", value: "[à compléter]" },
  { label: "Responsable publication", value: "[à compléter]" },
  { label: "Email", value: "[à compléter]" },
  { label: "Hébergeur", value: "[à compléter]" },
];

export default function MentionsLegalesPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <h1 className="text-3xl font-semibold tracking-tight text-aal-navy sm:text-4xl">
        Mentions légales
      </h1>

      <dl className="mt-8 flex flex-col divide-y divide-aal-warmgray">
        {MENTIONS.map((item) => (
          <div key={item.label} className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-4">
            <dt className="w-56 shrink-0 text-sm font-medium text-aal-navy">
              {item.label}
            </dt>
            <dd className="text-sm text-aal-navy/70">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
