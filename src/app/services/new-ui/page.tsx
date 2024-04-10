import Faq from "@/components/pages/home/faq";
import CoreBenefits from "@/components/pages/services/core-benefits";
import ServiceHeroSection from "@/components/pages/services/herosection";
import LimitedOfferSection from "@/components/pages/services/limited-offer-section";
import Testimonials from "@/components/pages/services/testimonials";
import UserEmpathyBanner from "@/components/pages/services/user-empathy-banner";
import WhatAndWhySection from "@/components/pages/services/what-and-why-section";
import { GoogleAdsServicePageData } from "@/lib/data/data";

const NewUI = () => {
  return (
    <div>
      <ServiceHeroSection />
      <LimitedOfferSection />
      <WhatAndWhySection />
      <UserEmpathyBanner />
      <Testimonials />
      <CoreBenefits />
      <Faq data={GoogleAdsServicePageData.faqData} />
    </div>
  );
};

export default NewUI;
