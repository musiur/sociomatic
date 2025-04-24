import Image from "next/image";
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
        <span>$1.3 Million in Revenue:</span> Scaled Togs Clothing using Google
        & Meta Ads.
      </>
    ),
  },
  {
    icon: <Undo2Icon />,
    text: (
      <>
        <span>300% Conversion Growth:</span> Clients experience a{" "}
        <span>3X boost</span> in just 90 days.
      </>
    ),
  },
  {
    icon: <Users2 />,
    text: (
      <>
        <span>High ROI:</span> Our expert Google & Meta Ads strategy turned a
        $71K ad spend into $253K in sales in just one month, delivering an
        impressive <span>3X-5X ROI</span>
      </>
    ),
  },
  {
    icon: <SparklesIcon />,
    text: (
      <>
        <span>
          Client Endorsement: &quot;Honest and professional. Communicated
          regularly and set realistic expectations. A pleasure to work
          with.&quot;
        </span>
      </>
    ),
  },
  {
    icon: <Heart />,
    text: (
      <>
        <span>Trusted by 850+ Businesses: </span> 500+{" "}
        <span>five-star reviews</span> prove our success.
      </>
    ),
  },
  {
    icon: <SearchIcon />,
    text: (
      <>
        <span>Full Transparency:</span> Get{" "}
        <span>real-time dashboards & daily tracking.</span>
      </>
    ),
  },
];

const AchieveSectionTwo = () => {
  return (
    <section className="section container space-y-[48px]">
      <h2 className="text-center mb-12">
        Our <span className="text-secondary">Proven Results</span> Speak for
        Themselves
      </h2>

      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-8">
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
          <AdvertisementCTA section="Our Proven Results Speak For Themselves - Two"/>
        </div>

        <div className="flex-1 space-y-6">
          <Image
            src="https://in8cddcab4.ufs.sh/f/TLm9XcQ0Drp98Kmttf5SAa1I3BDoFJtcP4VhWbZvQrYmuyi0"
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

export default AchieveSectionTwo;
