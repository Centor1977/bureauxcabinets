import type { Metadata } from "next";
import { LandingPageTemplate } from "@/components/landing/landing-page-template";
import { landingPagesConfig } from "@/lib/landing/config";
import { buildTrackingContext } from "@/lib/landing/build-tracking-context";

const config = landingPagesConfig.serrureConnectee;

// Page créée pour le SEA (Google Ads) : noindex temporaire tant qu'elle n'a
// pas été validée comme vraie page SEO. Retirer `robots` pour l'indexer.
export const metadata: Metadata = {
  title: config.meta.title,
  description: config.meta.description,
  robots: {
    index: false,
    follow: true,
  },
};

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function InstallerSerrureConnecteeLillePage({ searchParams }: PageProps) {
  const params = await searchParams;
  const trackingContext = buildTrackingContext(config, params);

  return <LandingPageTemplate config={config} trackingContext={trackingContext} />;
}
