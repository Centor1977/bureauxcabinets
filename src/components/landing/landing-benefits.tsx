type LandingBenefitsProps = {
  items: string[];
};

// Trois bénéfices immédiatement compréhensibles. Reprend le style "carte" des
// blocs de la home (rayons, couleurs, espacements).
export function LandingBenefits({ items }: LandingBenefitsProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={item}
              className="flex flex-col gap-4 rounded-2xl border border-aal-warmgray bg-aal-offwhite p-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-aal-teal text-sm font-semibold text-white">
                {index + 1}
              </span>
              <p className="text-base leading-6 text-aal-navy">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
