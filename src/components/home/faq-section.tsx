"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/icons";

const FAQ_ITEMS = [
  {
    question: "Combien coûte une installation pour un logement meublé ?",
    answer:
      "Le prix dépend de votre logement, de l’accès concerné et de la solution retenue (code, badge, serrure connectée, interphone connecté ou ouverture à distance). Après votre demande, un professionnel vérifié vous rappelle pour évaluer votre situation et vous proposer une estimation ou un devis adapté.",
  },
  {
    question: "Puis-je ajouter une photo de ma porte ou de mon interphone ?",
    answer:
      "Oui. L’ajout d’une photo est facultatif mais recommandé : elle aide le professionnel à vérifier la compatibilité de votre porte, serrure ou interphone et à préparer une estimation plus précise avant même de vous rappeler.",
  },
  {
    question: "Est-ce adapté à une location de courte durée ?",
    answer:
      "Oui, le service s’adresse en priorité aux logements meublés, locations de courte durée, conciergeries et biens gérés à distance à Lille métropole, où la gestion des remises de clés est souvent la plus contraignante.",
  },
  {
    question: "Toutes les portes et interphones sont-ils compatibles ?",
    answer:
      "Cela dépend du type de porte, de serrure et d’interphone déjà en place. C’est justement ce que le professionnel vérifié évalue avec vous lors du rappel, à partir des informations et de la photo transmises, afin de proposer la solution réellement adaptée.",
  },
  {
    question: "Comment fonctionne le rappel du professionnel ?",
    answer:
      "Une fois votre demande qualifiée, elle est transmise à un professionnel vérifié adapté à votre projet et à votre zone. Il vous rappelle sur les créneaux indiqués pour confirmer la faisabilité et vous proposer une estimation ou un devis. Ces créneaux facilitent le rappel mais ne constituent pas un rendez-vous confirmé.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-aal-navy sm:text-4xl">
          Questions fréquentes
        </h2>

        <div className="mt-10 divide-y divide-aal-warmgray border-y border-aal-warmgray">
          {FAQ_ITEMS.map((item, index) => {
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
                  <p className="pb-5 text-sm leading-6 text-aal-navy/70">
                    {item.answer}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
