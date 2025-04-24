import Image from "next/image";
import Link from "next/link";
import ShimmerButton from "@/components/magicui/shimmer-button";
import {
  Heart,
  SearchIcon,
  SparklesIcon,
  TrendingUpIcon,
  Undo2Icon,
  Users2,
} from "lucide-react";
import AdvertisementCTA from "./advertisement-cta";

const features = [
  {
    icon: <TrendingUpIcon />,
    text: (
      <>
        <span>300% Increase in Conversions:</span> Clients have seen up to a 300% boost in conversion rate within 90 days.
      </>
    ),
  },
  {
    icon: <Undo2Icon />,
    text: (
      <>
        <span>ROI Amplification:</span> On average, we turn $300 into <span>$30k in revenue.</span>
      </>
    ),
  },
  {
    icon: <Users2 />,
    text: (
      <>
        <span>Lead Generation:</span> Delivered up to 150 plus qualified leads in just 3 months.
      </>
    ),
  },
  {
    icon: <SparklesIcon />,
    text: (
      <>
        <span>Client Endorsment:</span> “Yeatiq was able to help us understand and help us make decisions best. He has done an excellent job. We will be back to do more projects”
      </>
    ),
  },
  {
    icon: <Heart />,
    text: (
      <>
        <span>Trusted by 850+ Businesses:</span> 500+ <span>five-star reviews</span> prove our success.
      </>
    ),
  },
  {
    icon: <SearchIcon />,
    text: (
      <>
        <span>Complete Transparency:</span> Full access to real-time dashboards
        and daily tracking
      </>
    ),
  },
];

const AchieveSection = () => {
  return (
    <section className="section container space-y-[48px]">
      <h2 className="text-center mb-12">
        Our <span className="text-secondary">Proven Results</span> Speak for Themselves
      </h2>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        <div className="flex-1 space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 [&>svg]:w-6 [&>svg]:h-6 [&>svg]:min-w-6 [&>svg]:min-h-6"
            >
              {feature.icon}
              <p className="[&>span]:font-semibold">{feature.text}</p>
            </div>
          ))}
          <AdvertisementCTA section="Our Proven Results Speak for Themeselves - One"/>
          
        </div>

        <div className="flex-1 space-y-6">
          <Image
            src="https://utfs.io/f/TLm9XcQ0Drp9VpRj6CXtzjwcuqoVvpZmxNrkdWPhDefA1Mb2"
            alt="Proven results"
            width={400}
            height={400}
            className="w-full h-auto min-h-[200px] rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AchieveSection;
