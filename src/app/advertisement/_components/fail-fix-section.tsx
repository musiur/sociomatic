import XRedIcon from "@/components/assets/x-red";
import CheckGreenIcon from "@/components/assets/check-green";
import ShimmerButton from "@/components/magicui/shimmer-button";
import Link from "next/link";

const painPoints = [
  "Throwing money at ads with no clear strategy.",
  "No time to track, tweak, or test campaigns.",
  "Agencies that vanish after taking your money.",
];

const solutions = [
  "Daily optimization by certified experts.",
  "Transparent reporting: See every dollar spent.",
  "Pay only if we deliver REAL results",
];

const FailFixSection = () => {
  return (
    <section className="section container space-y-12">
      <h2 className="text-center">
        Why Most Businesses Fail at Ads{" "}
        <span className="text-secondary">(And How We Fix It)</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto md:px-4">
        <div className="space-y-6">
          <h3 className="font-semibold text-lg md:text-xl mb-4">
            Pain points you may encounter
          </h3>
          <div className="space-y-4">
            {painPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <XRedIcon className="w-6 h-6 flex-shrink-0 mt-1" />
                <p className="text-lg">{point}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-semibold text-lg md:text-xl mb-4">
            Solution within 3 months
          </h3>
          <div className="space-y-4">
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckGreenIcon className="w-6 h-6 flex-shrink-0 mt-1" />
                <p className="text-lg">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Link href="/" className="inline-block w-full">
        <ShimmerButton className="w-auto mx-auto">See How We Turn $300 into $3,000</ShimmerButton>
      </Link>
    </section>
  );
};

export default FailFixSection;
