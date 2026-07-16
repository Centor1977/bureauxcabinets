// Pont de tracking minimal, sans dépendance. Pousse chaque événement dans
// window.dataLayer (standard GTM/GA4) : si aucun conteneur GTM n'est encore
// installé sur le site, les événements s'accumulent sans effet, prêts à être
// consommés dès qu'un conteneur est branché — voir README pour ce qui reste
// à connecter manuellement.

type TrackPayload = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export function track(event: string, payload: TrackPayload = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...payload });

  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug(`[tracking] ${event}`, payload);
  }
}
