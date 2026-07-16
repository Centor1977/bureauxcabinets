export type LandingIntent =
  | "serrure_connectee"
  | "boite_cles"
  | "location_courte_duree";

export type LandingPrefill = {
  typeBien?: string;
  problemes?: string[];
  acces?: string[];
  niveauSolution?: string;
};

export type LandingTrackingContext = {
  landingPage: string;
  landingIntent: LandingIntent;
  pageUrl: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  gclid?: string;
};

export type LandingFaqItem = {
  question: string;
  answer: string;
};

export type LandingImage = {
  src: string;
  alt: string;
};

export type LandingConfig = {
  slug: string;
  intent: LandingIntent;
  route: string;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    h1: string;
    subtitle: string;
    ctaPrimaryLabel: string;
    ctaSecondaryLabel: string;
    ctaSecondaryHref: string;
    reassurances: string[];
    image: LandingImage;
  };
  benefits: string[];
  problem: {
    title: string;
    text: string;
    image?: LandingImage;
    points?: string[];
  };
  solutions: {
    title: string;
    items: string[];
  };
  faq: LandingFaqItem[];
  prefill: LandingPrefill;
};
