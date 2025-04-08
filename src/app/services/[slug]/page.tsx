import Faq from "@/app/_utils/faq";
import ClientsReviews from "@/app/case-studies/_utils/clients-reviews";
import { Action___Get__Review_By_Category } from "@/app/reviews/post/_utils/actions";
import CoreBenefits from "@/app/services/_utils/core-benefits";
import EndingFunnel from "@/app/services/_utils/ending-funnel";
import ServiceHeroSection from "@/app/services/_utils/herosection";
import LimitedOfferSection from "@/app/services/_utils/limited-offer-section";
import UserEmpathyBanner from "@/app/services/_utils/user-empathy-banner";
import WhatAndWhySection from "@/app/services/_utils/what-and-why-section";
import { ServicePageCOPY } from "@/app/services/_utils/data/services";
import { Fragment } from "react";

export type T__SlugType =
  | "googleads"
  | "googleanalytics"
  | "customwebdev"
  | "wordpress"
  | "shopify"
  | "uiux"
  | "software"
  | "socialmediapaidads";
  
const Services = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  let data: any = ServicePageCOPY.googleads;
  const key = params?.slug
    ?.replaceAll("development", "")
    ?.replaceAll("-", "")
    .trim();
  const masteredKey = key === "customweb" ? "customwebdev" : key;
  const result = await Action___Get__Review_By_Category(key as T__SlugType);
  const reviews = result?.data?.length ? result?.data : [];

  if (Object.keys(ServicePageCOPY).includes(masteredKey)) {
    data = ServicePageCOPY[masteredKey as T__SlugType];
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
    <Fragment>
      <ServiceHeroSection data={hero} />
      <LimitedOfferSection data={limitedOffer} />
      <WhatAndWhySection data={whyWeAndWhatWeDo} />
      <UserEmpathyBanner data={userEmpathy} />
      <ClientsReviews reviews={reviews} projectIdea={false} />
      <CoreBenefits data={coreBenefits} />
      <EndingFunnel data={endingFunnel} />
      <Faq data={faq} />
    </Fragment>
  );
};

export default Services;
