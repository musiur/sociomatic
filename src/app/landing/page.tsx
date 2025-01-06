import { Fragment } from "react";
import LandingHeroSection from "./_utils/sections/hero";
import LandingAboutSection from "./_utils/sections/about";
import LandingProofSection from "./_utils/sections/proof";
import LandingReviewSection from "./_utils/sections/review";
import LandingVisualsSection from "./_utils/sections/visuals";
import LandingCTASection from "./_utils/sections/cta";

const LandingPage = () => {
  return (
    <Fragment>
      <LandingHeroSection />
      <LandingAboutSection />
      <LandingProofSection />
      <LandingReviewSection />
      <LandingVisualsSection />
      <LandingCTASection />
    </Fragment>
  );
};

export default LandingPage;
