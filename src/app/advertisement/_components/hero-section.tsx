import { default as AdvertisementHeroSection } from "@/app/_utils/herosection";
import AdvertisementCTA from "./advertisement-cta";

const HeroSection = () => {
  return (
    <AdvertisementHeroSection
      H1={
        <>
          Prove Us Wrong: We&apos;ll <span>Grow Your Business</span> with Google
          & Meta Ads in 90 Days… Or&nbsp;
          <span className="!text-gray-500">You Pay Nothing.</span>
        </>
      }
      P={
        <>
          Stop risking thousands on vague promises. For just $300/month,
          we&apos;ll handle your ads and deliver REAL results—or we&apos;ll
          refund every penny.
        </>
      }
      videoLink={
        "https://www.youtube.com/embed/S8rncQvo-nU?si=JrIKuomxaHXBotUT"
      }
      cta={<AdvertisementCTA />}
    />
  );
};

export default HeroSection;
