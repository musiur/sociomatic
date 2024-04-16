import Springle from "@/components/assets/springle";
import TransactionDashboard from "@/components/assets/transactions-dashbaord";
import ServicesCTA from "@/components/molecule/services-cta";
import { Button } from "@/components/ui/button";

const EndingFunnel = () => {
  return (
    <div className="container pb-[96px] flex flex-col min-[700px]:flex-row gap-10 items-center justify-center">
      <div className="space-y-[32px] max-w-[600px]">
        <h2 className="h2 text-primary">
          So when we say,&nbsp;
          <span className="text-secondary relative">
            Advertising Is The Only Way To Get Your sales/lead And Reach The
            Level Of Success In Your Business You Want.
          </span>
          <br /> We mean it
        </h2>
        <p>
          Spots for The Sociomatic&apos;s Google Ads Family are filling up
          fast(Only 46 spots are available). Take advantage of this chance to
          join a community of successful entrepreneurs and watch your business
          soar. Schedule your free one-on-one consultation now and claim your
          spot!
        </p>
        <ServicesCTA />
      </div>
      <TransactionDashboard className="w-full hidden sm:block" />
    </div>
  );
};

export default EndingFunnel;
