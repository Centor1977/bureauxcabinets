import { HeroSection } from "@/components/home/hero-section";
import { BenefitsSection } from "@/components/home/benefits-section";
import { ProblemSection } from "@/components/home/problem-section";
import { SolutionsSection } from "@/components/home/solutions-section";
import { QualificationSection } from "@/components/home/qualification-section";
import { TargetSection } from "@/components/home/target-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { ReassuranceSection } from "@/components/home/reassurance-section";
import { FaqSection } from "@/components/home/faq-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <ProblemSection />
      <SolutionsSection />
      <QualificationSection />
      <TargetSection />
      <HowItWorksSection />
      <ReassuranceSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
