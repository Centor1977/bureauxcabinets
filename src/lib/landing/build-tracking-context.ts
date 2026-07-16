import type { LandingConfig, LandingTrackingContext } from "./types";

type SearchParams = Record<string, string | string[] | undefined>;

function first(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

// Construit le contexte de tracking côté serveur à partir des paramètres
// d'URL (utm_*, gclid) : aucune dépendance à un hook client, fonctionne même
// JS désactivé pour la partie stockage du lead.
export function buildTrackingContext(
  config: LandingConfig,
  searchParams: SearchParams,
): LandingTrackingContext {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(searchParams)) {
    const v = first(value);
    if (v) query.set(key, v);
  }
  const queryString = query.toString();

  return {
    landingPage: config.route,
    landingIntent: config.intent,
    pageUrl: queryString ? `${config.route}?${queryString}` : config.route,
    utmSource: first(searchParams.utm_source),
    utmMedium: first(searchParams.utm_medium),
    utmCampaign: first(searchParams.utm_campaign),
    utmTerm: first(searchParams.utm_term),
    utmContent: first(searchParams.utm_content),
    gclid: first(searchParams.gclid),
  };
}
