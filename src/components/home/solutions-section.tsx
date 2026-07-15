import { LockIcon, IntercomIcon, BadgeIcon, DoorIcon } from "@/components/icons";

const SOLUTIONS = [
  {
    icon: LockIcon,
    title: "Serrure connectée",
    text: "Pour équiper la porte d’un logement meublé ou géré à distance et limiter la gestion des clés physiques.",
  },
  {
    icon: IntercomIcon,
    title: "Interphone connecté",
    text: "Pour faciliter l’ouverture d’une entrée d’immeuble lorsque l’installation le permet.",
  },
  {
    icon: BadgeIcon,
    title: "Code, badge ou ouverture à distance",
    text: "Pour donner un accès plus simple à un voyageur, un prestataire, une équipe de ménage ou un utilisateur régulier.",
  },
  {
    icon: DoorIcon,
    title: "Accès autonome complet",
    text: "Pour traiter à la fois l’entrée de l’immeuble et la porte du logement lorsque les deux accès posent problème.",
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-aal-navy sm:text-4xl">
          Quelle solution pour votre logement ?
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-2xl border border-aal-warmgray bg-aal-offwhite p-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-aal-teal shadow-sm">
                <Icon />
              </span>
              <h3 className="text-base font-semibold text-aal-navy">
                {title}
              </h3>
              <p className="text-sm leading-6 text-aal-navy/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
