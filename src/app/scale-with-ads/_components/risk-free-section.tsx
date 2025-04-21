import { CubeIcon } from "@radix-ui/react-icons";
import { BarChart3, Settings } from "lucide-react";
import Tagline from "@/components/molecule/tagline";
import ShimmerButton from "@/components/magicui/shimmer-button";
import Link from "next/link";
import AdvertisementCTA from "./advertisement-cta";

const phases = [
  {
    icon: <CubeIcon className="w-6 h-6" />,
    description: "Pay upfront with zero risk.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    description:
      'No Results = No Pay: "If we miss targets, we refund 100% + shut off campaigns."',
  },
  {
    icon: <Settings className="w-6 h-6" />,
    description:
      'Direct Line to Founder: "No bots. No tiers. Text me personally if issues arise."',
  },
];

const RiskFreeSection = () => {
  return (
    <section className="section bg-muted">
      <div className="container space-y-12">
        <div className="flex flex-col items-center justify-center gap-6">
          <Tagline text={<>No Risks</>} />
          <h2 className="text-center">
            Why This is <span className="text-secondary">Risk-Free</span>{" "}
            (Seriously)
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center justify-center">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="relative bg-white/60 rounded-lg p-6 border-[2px] hover:border-secondary transition-border backdrop-blur-lg [&>*]:text-center min-w-[300px] min-h-[160px] flex flex-col items-center justify-center gap-4"
            >
              {phase.icon}
              <p>{phase.description}</p>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center">
          <AdvertisementCTA
            text="Experience Risk-Free Growth Today"
            section="Why This is Risk-Free (Seriously)"
          />
        </div>
      </div>
    </section>
  );
};

export default RiskFreeSection;
