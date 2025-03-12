import Image from "next/image";
import Link from "next/link";
import ShimmerButton from "@/components/magicui/shimmer-button";
import {
  SearchIcon,
  SparklesIcon,
  TrendingUpIcon,
  Undo2Icon,
  Users2,
} from "lucide-react";

const features = [
  {
    icon: <TrendingUpIcon />,
    text: (
      <>
        <span>300% Increase in Conversions:</span> Clients have seen up to a
        300% boost in conversion rates within 90 days.
      </>
    ),
  },
  {
    icon: <Undo2Icon />,
    text: (
      <>
        <span>ROI Amplification:</span> On average, we turn $300 into $3,000 in
        revenue.
      </>
    ),
  },
  {
    icon: <Users2 />,
    text: (
      <>
        <span>Lead Generation:</span> Delivered up to 90 qualified leads in just
        3 months
      </>
    ),
  },
  {
    icon: <SparklesIcon />,
    text: (
      <>
        <span>Client Satisfaction:</span> Earned 500+ five-star reviews from
        850+ businesses.
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

      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
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
          <Link href="/" className="inline-block w-full pt-8">
            <ShimmerButton className="w-auto">
            See How We Achieved These Results
            </ShimmerButton>
          </Link>
          
        </div>

        <div className="flex-1 space-y-6">
          <Image
            src="https://in8cddcab4.ufs.sh/f/TLm9XcQ0Drp9HXIUHKQ63lrKW6cbSangxZGDNTm1szfYJEjk"
            alt="Meta Certified"
            width={120}
            height={120}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AchieveSection;
