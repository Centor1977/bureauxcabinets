"use client";

import { useEffect } from "react";
import { track } from "@/lib/tracking/track";

type LandingViewTrackerProps = {
  trackingPayload: Record<string, string | undefined>;
};

// Composant invisible : déclenche l'événement landing_view une fois au
// montage de la page. Ne rend rien.
export function LandingViewTracker({ trackingPayload }: LandingViewTrackerProps) {
  useEffect(() => {
    track("landing_view", trackingPayload);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
