import Springle from "@/components/assets/springle";
import TransactionDashboard from "@/components/assets/transactions-dashbaord";
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
            <Springle className="absolute bottom-[-16px] left-0 z-[-1] w-full" />
          </span>
        </h2>
        <p>
          Supercharge your productivity and optimize your workflow with Sublime.
          Our intuitive interface and robust features for you
        </p>
        <div className="space-y-4">
          <p>
            Go Here To Fill Out A 2-Minute Application For The Coaching Program
          </p>
          <div className="grid grid-cols-1 min-[400px]:flex flex-wrap items-center justify-start gap-[12px]">
            <Button variant="secondary">Get Started right away</Button>
            <Button variant="outline">Get a free consultation</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LimitedOfferSection;
