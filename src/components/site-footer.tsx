import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/contact", label: "Contact" },
  { href: "/installateurs", label: "Installateurs" },
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/confidentialite", label: "Politique de confidentialité" },
];

export function SiteFooter() {
  return (
    <footer className="bg-aal-navy text-aal-offwhite">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-xl">
          <p className="text-sm font-semibold text-white">Accès Autonome Lille</p>
          <p className="mt-2 text-sm leading-6 text-aal-offwhite/80">
            Accès Autonome Lille — Solutions d&rsquo;accès autonome pour
            logements meublés, locations de courte durée et biens gérés à
            distance à Lille métropole.
          </p>
          <p className="mt-4 text-xs text-aal-offwhite/60">
            Serrure connectée · Interphone connecté · Code · Badge · Ouverture
            à distance
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-aal-offwhite/80 transition-colors hover:text-aal-teal"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
