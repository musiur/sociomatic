import {
  Eye,
  Unlock,
  Settings,
  LayoutGrid,
  FileText,
  Activity,
  UserCircle,
  Database,
  Video,
} from "lucide-react";
import AdvertisementCTA from "./advertisement-cta";

const leftFeatures = [
  {
    icon: <Eye />,
    text: "Transparent Tracking: Daily updates + live dashboard access.",
  },
  {
    icon: <Unlock />,
    text: "No Lock-Ins: Cancel anytime if unhappy.",
  },
  {
    icon: <Settings />,
    text: "Ads That Adapt: We tweak bids, audiences, and creatives DAILY.",
  },
];

const rightFeatures = [
  {
    icon: <LayoutGrid />,
    text: "Full Meta + Google Ads management.",
  },
  {
    icon: <FileText />,
    text: "Weekly optimization reports.",
  },
  {
    icon: <Activity />,
    text: "Daily campaign monitoring.",
  },
  {
    icon: <UserCircle />,
    text: "Direct contact to founder.",
  },
  {
    icon: <Database />,
    text: "Data Driven Marketing Solutions",
  },
  {
    icon: <Video />,
    text: "Zoom session every week with the CEO",
  },
];

const ComparisonCopySection = () => {
  return (
    <section className="container section">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12">
        <div className="max-w-2xl space-y-8">
          <h2>
            Most Agencies Take Your Money and Guess.{" "}
            <span className="text-secondary">We Do the Opposite.</span>
          </h2>
          <div className="space-y-6">
            {leftFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 [&>svg]:w-6 [&>svg]:h-6 [&>svg]:min-w-6 [&>svg]:min-h-6 [&>svg]:stroke-secondary">
                {feature.icon}
                <p className="text-lg">{feature.text}</p>
              </div>
            ))}
            <AdvertisementCTA section="Most Agencies Take Your Money and Guess. We do the Opposite"/>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-lg md:text-xl font-medium">
            What You Get for $300/Month
            <br /> Package Breakdown
          </h3>
          <div className="space-y-4">
            {rightFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 [&>svg]:w-6 [&>svg]:h-6 [&>svg]:stroke-secondary"
              >
                {feature.icon}
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonCopySection;
