"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/#solutions", label: "Solutions" },
  { href: "/#comment-ca-marche", label: "Comment ça marche" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-aal-warmgray bg-aal-offwhite/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-aal-navy"
        >
          Accès Autonome Lille
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-aal-navy/80 transition-colors hover:text-aal-teal"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="tel:0320157845"
            className="text-sm font-medium text-aal-navy/80 hover:text-aal-teal"
          >
            Besoin d&rsquo;aide ? 03 20 15 78 45
          </a>
          <Link
            href="/#formulaire"
            className="inline-flex h-11 items-center justify-center rounded-full bg-aal-teal px-5 text-sm font-semibold text-white transition-colors hover:bg-aal-teal-dark"
          >
            Recevoir une estimation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Ouvrir le menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-aal-navy/20 text-aal-navy lg:hidden"
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open ? (
        <div className="border-t border-aal-warmgray bg-aal-offwhite px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-aal-navy"
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:0320157845" className="text-base font-medium text-aal-navy/80">
              Besoin d&rsquo;aide ? 03 20 15 78 45
            </a>
            <Link
              href="/#formulaire"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 items-center justify-center rounded-full bg-aal-teal px-5 text-sm font-semibold text-white"
            >
              Recevoir une estimation
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
