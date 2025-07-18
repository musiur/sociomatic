import { GigCard } from "./gig-card";
import { v4 as uuid } from "uuid"

const gigs = [
  {
    image: "/images/yeatiq.png",
    title: "I will setup google analytics 4 with",
    highlight: "google tag manager",
    description:
      "I will set up Google Analytics 4 (GA4), facebook pixel ,any tracking  with Google Tag Manager (GTM) to help you track user behavior, conversions, and events accurately — so you can make smarter marketing decisions",
    features: [],
    cta: "View on Fiverr",
    ctaLink: "https://www.fiverr.com/yeatiq/set-up-google-analytics-gtm-ga4-ga",
  },
  {
    image: "/images/yeatiq.png",
    title: "I will setup or fix",
    highlight: "google analytics 4, ga4 ecommerce tracking with GTM",
    description:
      "I will set up or fix Google Analytics 4 (GA4) ecommerce tracking with Google Tag Manager (GTM), ensuring accurate data collection, conversion tracking, and full funnel insights for your online store.",
    features: [],
    cta: "View on Fiverr",
    reverse: true,
    ctaLink:
      "https://www.fiverr.com/yeatiq/setup-or-fix-google-analytics-4-ga4-ecommerce-tracking-gads-conversion-gtm",
  },
  {
    image: "/images/yeatiq.png",
    title: "I will setup and efficiently",
    highlight: "manage your google ads adwords PPC campaigns",
    description:
      "I will set up and professionally manage your Google Ads (AdWords) PPC campaigns to drive targeted traffic, maximize ROI, and grow your business with data-driven strategies",
    features: [],
    cta: "View on Fiverr",
    ctaLink:
      "https://www.fiverr.com/yeatiq/setup-and-efficiently-manage-your-google-ads-adwords-ppc-campaigns",
  },
  {
    image: "/images/yeatiq.png",
    title: "I will setup and manage your",
    highlight: "facebook,instagram ads campaigns",
    description:
      "I will set up and manage your Facebook and Instagram ad campaigns to help you reach the right audience, generate leads or sales, and scale with high-converting creatives and data-backed strategy.",
    features: [],
    cta: "View on Fiverr",
    reverse: true,
    ctaLink:
      "https://www.fiverr.com/yeatiq/setup-and-manage-your-facebook-ads-campaigns",
  },
];

export default function GigsSection() {
  return (
    <section className="container mx-auto section flex flex-col gap-16">
      {gigs.map((gig) => (
        <GigCard key={uuid()} gig={gig} />
      ))}
    </section>
  );
}
