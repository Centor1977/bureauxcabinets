import { ShieldIcon, PinIcon, BoltIcon } from "@/components/icons";

const BADGES = [
  { icon: ShieldIcon, label: "Professionnels vérifiés" },
  { icon: PinIcon, label: "Lille & métropole" },
  { icon: BoltIcon, label: "Réponse rapide" },
];

export function ReassuranceSection() {
  return (
    <section className="bg-aal-warmgray">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-aal-navy sm:text-4xl">
          Des professionnels vérifiés, pas une simple liste d’annuaire.
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-aal-navy/70">
          Les demandes sont orientées vers des professionnels dont
          l’activité, la zone d’intervention et l’expérience correspondent
          aux solutions recherchées : serrure connectée, interphone
          connecté, badge, code, ouverture à distance ou contrôle d’accès
          simple. L’objectif est d’éviter les contacts inutiles avec des
          intervenants non adaptés.
        </p>

        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-4">
          {BADGES.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-aal-navy shadow-sm"
            >
              <Icon className="h-5 w-5 text-aal-teal" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
