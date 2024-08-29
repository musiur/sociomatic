import Faq from "@/app/_utils/faq";
import { Action___Get__Review_By_Category } from "@/app/reviews/post/_utils/actions";
import CoreBenefits from "@/app/services/_utils/core-benefits";
import EndingFunnel from "@/app/services/_utils/ending-funnel";
import ServiceHeroSection from "@/app/services/_utils/herosection";
import LimitedOfferSection from "@/app/services/_utils/limited-offer-section";
import Testimonials from "@/app/services/_utils/testimonials";
import UserEmpathyBanner from "@/app/services/_utils/user-empathy-banner";
import WhatAndWhySection from "@/app/services/_utils/what-and-why-section";
import { ServicePageCOPY } from "@/lib/data/services";

export type T__SlugType =
  | "googleads"
  | "googleanalytics"
  | "customwebdevelopment"
  | "wordpressdevelopment"
  | "shopifydevelopment"
  | "uiux"
  | "softwaredevelopment"
  | "socialmediapaidads";
const Services = async ({ params }: { params: { slug: string } }) => {
  let data: any = ServicePageCOPY.googleads;
  const key = params?.slug?.replaceAll("-", "");
  const result = await Action___Get__Review_By_Category(key as T__SlugType);
  const reviews = result?.data?.length ? result?.data : [];

  if (Object.keys(ServicePageCOPY).includes(key)) {
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
      <Testimonials data={reviews} />
      <CoreBenefits data={coreBenefits} />
      <EndingFunnel data={endingFunnel} />
      <Faq data={faq} />
    </div>
  );
};

export default Services;
