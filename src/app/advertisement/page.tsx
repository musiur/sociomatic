import { Fragment } from "react";
import HeroSection from "./_components/hero-section";
import FailFixSection from "./_components/fail-fix-section";
import BrandsSection from "./_components/brands-section";
import TestimonialsSection from "./_components/testimonials-section";
import WhySafeSection from "./_components/why-safe-section";
import ThreeMonthsChallengeSection from "./_components/three-months-challenge-section";
import ComparisonCopySection from "./_components/comparison-copy-section";
import ComparisonTableSection from "./_components/comparison-table-section";
import AchieveSection from "./_components/achieve-section";
import ExpireSection from "./_components/expire-section";
import FaqSection from "./_components/faq-section";
import RiskFreeSection from "./_components/risk-free-section";
import FooterSection from "./_components/footer-section";
import AchieveSectionTwo from "./_components/achieve-section-two";

const Advertisement = () => {
  return (
    <Fragment>
      <HeroSection />
      <FailFixSection />
      <BrandsSection />
      <WhySafeSection />
      <TestimonialsSection />
      <AchieveSectionTwo />
      <ThreeMonthsChallengeSection />
      <ComparisonCopySection />
      <ComparisonTableSection />
      <AchieveSection />
      <RiskFreeSection />
      <FaqSection />
      <ExpireSection />
      <FooterSection />
    </Fragment>
  );
};

export default Advertisement;
