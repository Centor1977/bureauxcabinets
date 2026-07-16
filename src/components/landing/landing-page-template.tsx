import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { ReassuranceSection } from "@/components/home/reassurance-section";
import { LandingHero } from "./landing-hero";
import { LandingBenefits } from "./landing-benefits";
import { LandingProblem } from "./landing-problem";
import { LandingSolutions } from "./landing-solutions";
import { LandingFaq } from "./landing-faq";
import { LandingFinalCta } from "./landing-final-cta";
import { LandingViewTracker } from "./landing-view-tracker";
import type { LandingConfig, LandingTrackingContext } from "@/lib/landing/types";

type LandingPageTemplateProps = {
  config: LandingConfig;
  trackingContext: LandingTrackingContext;
};

// Assemble une landing page à partir d'une config, dans l'ordre imposé par
// le brief. Comment ça marche / Réassurance sont réutilisés tels quels
// depuis la home (contenu générique, non spécifique à une intention).
export function LandingPageTemplate({ config, trackingContext }: LandingPageTemplateProps) {
  const eventPayload = {
    landing_intent: trackingContext.landingIntent,
    page_path: trackingContext.pageUrl,
    utm_campaign: trackingContext.utmCampaign,
    utm_term: trackingContext.utmTerm,
  };

  return (
    <>
      <LandingViewTracker trackingPayload={eventPayload} />
      <LandingHero config={config} trackingContext={trackingContext} />
      <LandingBenefits items={config.benefits} />
      <LandingProblem
        title={config.problem.title}
        text={config.problem.text}
        image={config.problem.image}
        points={config.problem.points}
      />
      <LandingSolutions title={config.solutions.title} items={config.solutions.items} />
      <HowItWorksSection />
      <ReassuranceSection />
      <LandingFaq items={config.faq} />
      <LandingFinalCta
        title={config.hero.h1}
        text={config.hero.subtitle}
        ctaLabel={config.hero.ctaPrimaryLabel}
        trackingPayload={eventPayload}
      />
    </>
  );
}
