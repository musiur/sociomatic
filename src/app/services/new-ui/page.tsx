import ServiceHeroSection from "@/components/pages/services/herosection";
import LimitedOfferSection from "@/components/pages/services/limited-offer-section";
import UserEmpathyBanner from "@/components/pages/services/user-empathy-banner";
import WhatAndWhySection from "@/components/pages/services/what-and-why-section";

const NewUI = () => {
  return (
    <div>
      <ServiceHeroSection />
      <LimitedOfferSection />
      <WhatAndWhySection />
      <UserEmpathyBanner />
    </div>
  );
};

export default NewUI;
