import Image from "next/image";
import TransperancyIcon from "../_assets/transperancy-icon";
import CoinIcon from "../_assets/coin-icon";
import CalendarTimeIcon from "../_assets/calendar-time-icon";
import TestimonialAside from "./testimonial-aside";
import AdvertisementCTA from "./advertisement-cta";

const features = [
  {
    icon: <TransperancyIcon />,
    text: (
      <>
        <span>100% transparency:</span> Full access to your ad accounts and web
        analytics
      </>
    ),
  },
  {
    icon: <CoinIcon />,
    text: (
      <>
        Get a full <span>refund</span> if we don&apos;t deliver results
      </>
    ),
  },
  {
    icon: <CalendarTimeIcon />,
    text: (
      <>
        <span>No lock-in contracts</span>, but we ask for 90 days
      </>
    ),
  },
];

const WhySafeSection = () => {
  return (
    <section className="section container space-y-[48px]">
      <h2 className="text-center mb-12">
        Why This is the{" "}
        <span className="text-secondary">
          Safest
          <br /> Decision
        </span>{" "}
        You&apos;ll Ever Make
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
          <div className="flex items-center gap-8">
            <Image
              src="https://in8cddcab4.ufs.sh/f/TLm9XcQ0Drp9VIzd4elXtzjwcuqoVvpZmxNrkdWPhDefA1Mb"
              alt="90% Guarantee"
              width={100}
              height={100}
              className="w-[160px] h-auto"
            />
            <Image
              src="https://in8cddcab4.ufs.sh/f/TLm9XcQ0Drp9HXIUHKQ63lrKW6cbSangxZGDNTm1szfYJEjk"
              alt="Meta Certified"
              width={80}
              height={80}
              className="w-[100px] h-auto"
            />
            <Image
              src="https://in8cddcab4.ufs.sh/f/TLm9XcQ0Drp9eZIdO0Mg12HplPK8sxy493Dm0uSbhzjXZnEf"
              alt="Google Partner"
              width={100}
              height={100}
              className="w-[160px] h-auto"
            />
          </div>
          <AdvertisementCTA
            text="Switch to Transparent, Data-Driven Growth"
            section="Why This is the Safest Decision You'll Ever Make"
          />
        </div>

        <div className="flex-1 space-y-6">
          <TestimonialAside />
        </div>
      </div>
    </section>
  );
};

export default WhySafeSection;
