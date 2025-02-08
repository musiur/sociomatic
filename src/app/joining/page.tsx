import MessageFromCEO from "../about-us/_utils/message-from-ceo";
import ClientsReviews from "../case-studies/_utils/clients-reviews";
import { Action___Get__Review_By_Category } from "../reviews/post/_utils/actions";
import { T__SlugType } from "../services/[slug]/page";
import Testimonials from "../services/_utils/testimonials";
import GoogleAdsForm from "./_utils/google-ads-form";
import GoogleAnalyticsForm from "./_utils/google-analytics-form";
import HeroSectionJoining from "./_utils/hero.section";
import ShopifyDevelopmentForm from "./_utils/shopify-development-form";
import SocialMediaPaidAdsForm from "./_utils/social-media-paid-ads";
import SoftwareDevelopmentForm from "./_utils/software-development-form";
import { E_FormTypes } from "./_utils/types";
import UiUxForm from "./_utils/uiux-form";
import WebDevelopmentForm from "./_utils/web-development-form";
import WordpressDevelopmentForm from "./_utils/wordpress-development-form";

const Page = async (
  props: {
    searchParams: Promise<{ type: E_FormTypes }>;
  }
) => {
  const searchParams = await props.searchParams;
  const Forms = {
    googleads: <GoogleAdsForm />,
    googleanalytics: <GoogleAnalyticsForm />,
    customwebdev: <WebDevelopmentForm />,
    software: <SoftwareDevelopmentForm />,
    uiux: <UiUxForm />,
    shopify: <ShopifyDevelopmentForm />,
    wordpress: <WordpressDevelopmentForm />,
    socialmediapaidads: <SocialMediaPaidAdsForm />,
  };
  const type: E_FormTypes = searchParams.type || "googleads";
  const service =
    searchParams.type === "googleads"
      ? "Google Ads"
      : searchParams.type === "googleanalytics"
      ? "Google Analytics"
      : searchParams.type === "uiux"
      ? "UI/UX Design"
      : searchParams.type === "wordpress"
      ? "Wordpress Development"
      : searchParams.type === "shopify"
      ? "Shopify Development"
      : searchParams.type === "software"
      ? "Software Development"
      : searchParams.type === "socialmediapaidads"
      ? "Social Media Paid Ads"
      : searchParams.type === "customwebdev"
      ? "Custom Web Developer"
      : "";

  return (
    <>
      <HeroSectionJoining
        data={{
          tagline: <>Offshore in Growth</>,
          title: (
            <>
              Join Our
              <span>{service}</span>
              Program TODAY(Spot Limited)
            </>
          ),
          body: (
            <>
              Unlock Your <span>Free {service} Audit & Growth Strategy</span>
              And Finally Build The Business, Freedom, And Wealth You Want!
            </>
          ),
        }}
      />
      <section className="container section grid grid-cols-1 md:grid-cols-2 gap-8">
        <MessageFromCEO searchParams={searchParams} />
        <div>
          {
            // @ts-ignore
            Forms[type]
          }
        </div>
      </section>
      <ClientsReviews />
    </>
  );
};

export default Page;
