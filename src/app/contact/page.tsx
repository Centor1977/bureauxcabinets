import { PinIcon, PhoneIcon } from "@/components/icons";
import { ContactForm } from "@/components/contact/contact-form";

const ZONE_COUVERTE = [
  "Lille",
  "La Madeleine",
  "Marcq-en-Barœul",
  "Lambersart",
  "Villeneuve-d’Ascq",
  "Roubaix",
  "Tourcoing",
  "Croix",
  "Wasquehal",
  "métropole lilloise",
];

const RAPPELS = ["Gratuit", "Sans engagement", "Service local"];

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-aal-navy sm:text-4xl">
          Une question sur votre demande ?
        </h1>
        <p className="mt-4 text-base leading-7 text-aal-navy/70">
          Accès Autonome Lille vous aide à identifier le bon professionnel
          pour équiper un logement meublé, une location de courte durée
          ou un bien géré à distance à Lille métropole.
        </p>

        <ul className="mt-6 flex flex-wrap gap-3">
          {RAPPELS.map((item) => (
            <li
              key={item}
              className="rounded-full bg-aal-warmgray px-4 py-1.5 text-sm font-medium text-aal-navy"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-3">
            <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-aal-teal" />
            <div>
              <p className="text-sm font-medium text-aal-navy">Téléphone</p>
              <a
                href="tel:0320157845"
                className="text-sm text-aal-navy/70 hover:text-aal-teal"
              >
                03 20 15 78 45
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-0.5 h-5 w-5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-aal-navy">Email</p>
              <p className="text-sm text-aal-navy/70">[à compléter]</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="mt-0.5 h-5 w-5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-aal-navy">Horaires</p>
              <p className="text-sm text-aal-navy/70">[à compléter]</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-aal-teal" />
            <div>
              <p className="text-sm font-medium text-aal-navy">
                Zone couverte
              </p>
              <p className="text-sm leading-6 text-aal-navy/70">
                {ZONE_COUVERTE.join(", ")}
              </p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
