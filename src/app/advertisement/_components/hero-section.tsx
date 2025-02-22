import ServiceHeroSection from "@/app/services/_utils/herosection";

const HeroSection = () => {
  return (
    <ServiceHeroSection
      data={{
        video: "https://www.youtube.com/embed/S8rncQvo-nU?si=JrIKuomxaHXBotUT",
        tagline: <>100% Trust Worthy Solutions</>,
        title: (
          <>
            Prove Us Wrong: We&apos;ll <span>Grow Your Business</span> with
            Google & Meta Ads in 90 Days… Or{" "}
            <span className="!text-gray-500">You Pay Nothing.</span>
          </>
        ),
        body: (
          <>
            Stop risking thousands on vague promises. For just $300/month,
            we&apos;ll handle your ads and deliver REAL results—or we&apos;ll
            refund every penny.
          </>
        ),
        cta: {
          primary: {
            text: <>Get Started Right Away</>,
            link: "/joining?type=googleads",
          },
          secondary: {
            text: <>Get A Free Consultation</>,
            link: "/",
          },
        },
      }}
    />
  );
};

export default HeroSection;
