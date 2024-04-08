import ServiceHeroSection from "@/components/pages/services/herosection";
import LimitedOfferSection from "@/components/pages/services/limited-offer-section";
import Testimonials from "@/components/pages/services/testimonials";
import UserEmpathyBanner from "@/components/pages/services/user-empathy-banner";
import WhatAndWhySection from "@/components/pages/services/what-and-why-section";

const NewUI = () => {
  return (
    <div>
      <ServiceHeroSection />
      <LimitedOfferSection />
      <WhatAndWhySection />
      <UserEmpathyBanner />
      <Testimonials />
    </div>
  );
};

export default NewUI;
