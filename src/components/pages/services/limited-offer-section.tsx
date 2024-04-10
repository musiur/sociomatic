import Springle from "@/components/assets/springle";
import TransactionDashboard from "@/components/assets/transactions-dashbaord";
import ServicesCTA from "@/components/molecule/services-cta";
import { Button } from "@/components/ui/button";

const LimitedOfferSection = () => {
  return (
    <div className="container pb-[96px] flex flex-col min-[700px]:flex-row gap-10 items-center justify-center">
      <TransactionDashboard className="w-full hidden sm:block" />
      <div className="space-y-[32px] max-w-[600px]">
        <h2 className="h2 text-primary">
          <span className="bg-secondary text-white py-1 px-2 rounded mr-2">
            Hurry up!
          </span>
          to get our offered services with&nbsp;
          <span className="text-secondary relative">
            low cost
          </span>
        </h2>
        <p>
          Supercharge your productivity and optimize your workflow with Sublime.
          Our intuitive interface and robust features for you
        </p>
        <ServicesCTA />
      </div>
    </div>
  );
};

export default LimitedOfferSection;
