import Faq from "@/app/_utils/faq";
import CoreBenefits from "@/app/services/_utils/core-benefits";
import EndingFunnel from "@/app/services/_utils/ending-funnel";
import ServiceHeroSection from "@/app/services/_utils/herosection";
import LimitedOfferSection from "@/app/services/_utils/limited-offer-section";
import Testimonials from "@/app/services/_utils/testimonials";
import UserEmpathyBanner from "@/app/services/_utils/user-empathy-banner";
import WhatAndWhySection from "@/app/services/_utils/what-and-why-section";
import { ServicePageCOPY } from "@/lib/data/services";

type T__SlugType =
  | "googleads"
  | "googleanalytics"
  | "customwebdevelopment"
  | "wordpressdevelopment"
  | "shopifydevelopment"
  | "uiux"
  | "softwaredevelopment";
const Services = ({ params }: { params: { slug: T__SlugType } }) => {
  let data: any = ServicePageCOPY.googleads;
  if (params.slug) {
    const key = params.slug.replaceAll("-", "");
    data = ServicePageCOPY[key as T__SlugType];
  }

  const {
    hero,
    limitedOffer,
    whyWeAndWhatWeDo,
    userEmpathy,
    coreBenefits,
    endingFunnel,
    faq,
  } = data;

  return (
    <div>
      <ServiceHeroSection data={hero} />
      <LimitedOfferSection data={limitedOffer} />
      <WhatAndWhySection data={whyWeAndWhatWeDo} />
      <UserEmpathyBanner data={userEmpathy} />
      <Testimonials />
      <CoreBenefits data={coreBenefits} />
      <EndingFunnel data={endingFunnel} />
      <Faq data={faq} />
    </div>
  );
};

export default Services;
