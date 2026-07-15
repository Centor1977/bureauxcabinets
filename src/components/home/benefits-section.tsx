import { UsersIcon, KeyIcon, SparkIcon, ShieldIcon, ChartIcon } from "@/components/icons";

const BENEFITS = [
  { icon: UsersIcon, label: "Arrivées voyageurs plus fluides" },
  { icon: KeyIcon, label: "Moins d’imprévus et de clés perdues" },
  { icon: SparkIcon, label: "Accès ménage et prestataires simplifiés" },
  { icon: ShieldIcon, label: "Codes temporaires ou accès révoqués" },
  { icon: ChartIcon, label: "Plus de contrôle, moins de déplacements" },
];

export function BenefitsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-3xl font-semibold tracking-tight text-aal-navy sm:text-4xl">
          L’accès autonome, simplement plus efficace.
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-aal-navy/70">
          L’accès autonome remplace les remises de clés contraignantes par
          une gestion à distance plus simple, plus sécurisée et plus
          fiable. Codes temporaires, badge, serrure connectée, interphone
          ou ouverture à distance : vous gardez le contrôle de vos
          arrivées, sans être présent sur place.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {BENEFITS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-aal-warmgray text-aal-teal">
                <Icon />
              </span>
              <p className="text-sm font-medium leading-5 text-aal-navy">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
