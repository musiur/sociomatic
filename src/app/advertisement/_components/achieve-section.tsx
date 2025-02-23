import { CubeIcon } from "@radix-ui/react-icons";
import { BarChart3, Settings } from "lucide-react";
import ArrowLine from "../_assets/arrow-line";
import Tagline from "@/components/molecule/tagline";

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

const AchieveSection = () => {
  return (
    <section className="section container">
      <div className="flex flex-col items-center justify-center gap-6">
        <Tagline text={<>Core benefits</>} />
        <h2 className="text-center mb-12">
          Here&apos;s How We Make Your $300/Month
          <br /> Work Harder{" "}
          <span className="text-secondary">Than a $3,000 Agency</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center justify-center">
        {phases.map((phase, index) => (
          <div
            key={index}
            className="relative bg-white/60 rounded-lg p-6 border hover:border-secondary transition-border backdrop-blur-lg max-w-2xl mx-auto [&>*]:text-center min-w-[300px]"
          >
            <div className="relative z-10 flex flex-col items-center justify-center gap-4">
              <div>{phase.icon}</div>
              <div>
                <h3 className="font-semibold text-sm md:text-lg">
                  {phase.title}
                </h3>
                <p className="text-gray-500">{phase.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchieveSection;
