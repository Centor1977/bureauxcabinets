"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/icons";
import type { LandingFaqItem } from "@/lib/landing/types";

type LandingFaqProps = {
  items: LandingFaqItem[];
};

// Même pattern d'accordéon que src/components/home/faq-section.tsx, avec une
// liste de questions/réponses spécifique à l'intention.
export function LandingFaq({ items }: LandingFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-aal-navy sm:text-4xl">
          Questions fréquentes
        </h2>

        <div className="mt-10 divide-y divide-aal-warmgray border-y border-aal-warmgray">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-medium text-aal-navy sm:text-base"
                >
                  {item.question}
                  <ChevronDownIcon
                    className={`h-4 w-4 shrink-0 text-aal-navy/40 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen ? (
                  <p className="pb-5 text-sm leading-6 text-aal-navy/70">{item.answer}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
