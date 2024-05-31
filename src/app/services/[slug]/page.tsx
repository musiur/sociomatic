import Faq from "@/app/_utils/faq";
import CoreBenefits from "@/app/services/_utils/core-benefits";
import EndingFunnel from "@/app/services/_utils/ending-funnel";
import ServiceHeroSection from "@/app/services/_utils/herosection";
import LimitedOfferSection from "@/app/services/_utils/limited-offer-section";
import Testimonials from "@/app/services/_utils/testimonials";
import UserEmpathyBanner from "@/app/services/_utils/user-empathy-banner";
import WhatAndWhySection from "@/app/services/_utils/what-and-why-section";
import { ServicePageCOPY } from "@/lib/data/services";

const Services = ({ params }: { params: { slug: string } }) => {
  const {
    googleAds,
    webDevelopment,
    softwareDevelopment,
    wordpressDevelopment,
    shopifyDevelopment,
    uiux,
    googleAnalytics,
  } = ServicePageCOPY;
  let data: any = googleAds;
  if (params.slug.includes("google-ads")) {
    data = googleAds;
  } else if (params.slug.includes("google-analytics")) {
    data = googleAnalytics;
  } else if (params.slug.includes("custom-web-development")) {
    data = webDevelopment;
  } else if (params.slug.includes("software-development")) {
    data = softwareDevelopment;
  } else if (params.slug.includes("wordpress-development")) {
    data = wordpressDevelopment;
  } else if (params.slug.includes("shopify-development")) {
    data = shopifyDevelopment;
  } else if (params.slug.includes("uiux")) {
    data = uiux;
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
