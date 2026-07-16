import { CheckCircleIcon } from "@/components/icons";

type LandingSolutionsProps = {
  title: string;
  items: string[];
};

// Reprend le style "carte" de src/components/home/solutions-section.tsx,
// simplifié à un libellé par élément (le brief ne fournit pas de description
// longue par élément pour ces listes).
export function LandingSolutions({ title, items }: LandingSolutionsProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-aal-navy sm:text-4xl">
          {title}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-2xl border border-aal-warmgray bg-aal-offwhite p-5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-aal-teal shadow-sm">
                <CheckCircleIcon className="h-5 w-5" />
              </span>
              <p className="text-sm font-medium leading-6 text-aal-navy">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
