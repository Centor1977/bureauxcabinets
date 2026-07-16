import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Accès Autonome Lille",
  description:
    "Accès Autonome Lille — Solutions d'accès autonome pour logements meublés, locations de courte durée et biens gérés à distance à Lille métropole.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Accès Autonome Lille",
    description:
      "Accès Autonome Lille — Solutions d'accès autonome pour logements meublés, locations de courte durée et biens gérés à distance à Lille métropole.",
    images: ["/images/acces-autonome/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-aal-offwhite text-aal-navy">
        <SiteHeader />
        <main className="flex flex-1 flex-col">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
