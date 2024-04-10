import Springle from "@/components/assets/springle";
import TransactionDashboard from "@/components/assets/transactions-dashbaord";
import ServicesCTA from "@/components/molecule/services-cta";
import { Button } from "@/components/ui/button";

const EndingFunnel = () => {
  return (
    <div className="container pb-[96px] flex flex-col min-[700px]:flex-row gap-10 items-center justify-center">
      <div className="space-y-[32px] max-w-[600px]">
        <h2 className="h2 text-primary">
          Is the ultimate step-by-step “short-cut” for business success
          and&nbsp;
          <span className="text-secondary relative">
            we really mean it
          </span>
        </h2>
        <p>
          Supercharge your productivity and optimize your workflow with Sublime.
          Our intuitive interface and robust features for you
        </p>
        <ServicesCTA />
      </div>
      <TransactionDashboard className="w-full hidden sm:block" />
    </div>
  );
};

export default EndingFunnel;
