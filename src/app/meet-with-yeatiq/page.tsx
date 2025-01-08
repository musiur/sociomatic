import { Fragment } from "react";
import LandingHeroSection from "./_utils/sections/hero";
import LandingAboutSection from "./_utils/sections/about";
import LandingProofSection from "./_utils/sections/proof";
import LandingReviewSection from "./_utils/sections/review";
import LandingVisualsSection from "./_utils/sections/visuals";
import LandingCTASection from "./_utils/sections/cta";
import ClientsReviews from "../case-studies/_utils/clients-reviews";
import { Action___Get__Review_By_Category } from "../reviews/post/_utils/actions";
import LandingCalendlySection from "./_utils/sections/calendly";
import LandingBottomSection from "./_utils/sections/bottom";

const LandingPage = async () => {
  const result = await Action___Get__Review_By_Category("socialmediapaidads");
  const reviews = result?.data?.length ? result?.data : [];
  return (
    <Fragment>
      <LandingHeroSection />
      <LandingAboutSection />
      <LandingProofSection />
      <LandingReviewSection />
      <ClientsReviews reviews={reviews} projectIdea={false} hideCTA={true}/>
      <LandingVisualsSection />
      <LandingCTASection />
      <LandingCalendlySection />
      <LandingBottomSection />
    </Fragment>
  );
};

export default LandingPage;
