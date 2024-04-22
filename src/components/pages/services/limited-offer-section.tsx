import Springle from "@/components/assets/springle";
import TransactionDashboard from "@/components/assets/transactions-dashbaord";
import ServicesCTA from "@/components/molecule/services-cta";
import { Button } from "@/components/ui/button";

const LimitedOfferSection = () => {
  return (
    <div className="container pb-[96px] flex flex-col min-[700px]:flex-row gap-10 items-center justify-center">
      <TransactionDashboard className="w-full hidden sm:block" />
      <div className="space-y-[32px] max-w-[600px]">
        <h2 className="h2 text-primary leading-normal">
          <span className="bg-secondary text-white py-1 px-2 rounded mr-2 leading-normal">
            Hurry up!
          </span>
          to Supercharge&nbsp;
          <span className="text-secondary relative leading-normal">
            Your Growth with Google Ads!
          </span>
        </h2>
        <p>
          Unlock explosive results and outpace your competition with our
          exclusive Google Ads offer.
        </p>
        <ul className="space-y-4">
          <li className="font-medium mb-2">
            Here&apos;s what you&apos;ll get:
          </li>
          <li>
            <span className="font-semibold">Free Google Ads Audit:</span>&nbsp;
            Identify hidden opportunities and optimize your campaigns (a $2.50
            Million Value)
          </li>
          <li>
            <span className="font-semibold">20% Off:</span>&nbsp;Your First
            Month&apos;s Management Fee: Get expert management at a discounted
            rate to kickstart your growth.
          </li>
          <li>
            <span className="font-semibold">Bonus:</span>&nbsp;Google Analytics
            & Ads Conversion Tracking Mastery! Our team will set up conversion
            tracking and ensure it&nbsp;s integrated seamlessly between Google
            Ads and Google Analytics
          </li>
        </ul>
        <ServicesCTA />
      </div>
    </div>
  );
};

export default LimitedOfferSection;
