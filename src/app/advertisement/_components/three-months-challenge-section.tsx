import { CubeIcon } from "@radix-ui/react-icons";
import { BarChart3, Settings } from "lucide-react";
import ArrowLine from "../_assets/arrow-line";
import Tagline from "@/components/molecule/tagline";
import Link from "next/link";
import ShimmerButton from "@/components/magicui/shimmer-button";

const phases = [
  {
    icon: <CubeIcon className="w-6 h-6 text-primary" />,
    title: "1st Month: Crush Testing Phase",
    description: "Find winning audiences & creatives",
    stats: "15 Leads generated",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    title: "2nd Month: Scale Profitably",
    description: "Double down on what works",
    stats: "45 Leads generated",
  },
  {
    icon: <Settings className="w-6 h-6 text-primary" />,
    title: "3rd Month: Automate Growth",
    description: "Refine campaigns for long-term ROI",
    stats: "30 Leads generated",
  },
];

const ThreeMonthsChallengeSection = () => {
  return (
    <section className="section container">
      <div className="flex flex-col items-center justify-center gap-6">
        <Tagline text={<>Our Challenge</>} />
        <h2 className="text-center mb-12">
          Here&apos;s How We Make Your $300/Month
          <br /> Work Harder{" "}
          <span className="text-secondary">Than a $3,000 Agency</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative items-center justify-center">
        <div className="absolute top-1/2 left-0 w-full pointer-events-none text-secondary flex items-center justify-center">
          <ArrowLine className="w-full rotate-90 lg:rotate-0" />
        </div>
        {phases.map((phase, index) => (
          <div
            key={index}
            className="relative bg-white/60 rounded-lg p-6 border hover:border-secondary transition-border backdrop-blur-lg [&>*]:text-center"
          >
            <div className="relative z-10 flex flex-col items-center justify-center gap-4">
              <div>{phase.icon}</div>
              <div>
                <h3 className="font-semibold text-sm md:text-lg">
                  {phase.title}
                </h3>
                <p className="text-gray-500">{phase.description}</p>
              </div>
              <p className="text-secondary font-medium">{phase.stats}</p>
            </div>
          </div>
        ))}
      </div>
      <Link href="/" className="inline-block w-full pt-8">
        <ShimmerButton className="w-auto mx-auto">
          Discover Our 3-Month Challenge
        </ShimmerButton>
      </Link>
    </section>
  );
};

export default ThreeMonthsChallengeSection;
