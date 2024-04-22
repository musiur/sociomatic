import LunarCircle from "@/components/assets/lunar-circle";
import Springle from "@/components/assets/springle";
import ServicesCTA from "@/components/molecule/services-cta";
import Tagline from "@/components/molecule/tagline";
import { Button } from "@/components/ui/button";

const ServiceHeroSection = () => {
  return (
    <div className="py-16">
      <div className="container flex flex-col items-center justify-center gap-[32px]">
        <Tagline text="100% Trust Worthy Solutions" />
        <h1 className="h1 text-primary text-center">
          2024 is Your&nbsp;
          <span className="text-secondary relative">
            Year to Explode Growth:
            {/* <Springle className="absolute bottom-[-16px] left-0 z-[-1] w-full" /> */}
          </span>
          &nbsp;Will Your Business Be Left Behind? (Limited Spots Available)
        </h1>
        <p className="max-w-[640px] text-center">
          Just a handful of business owners are about to unlock explosive growth
          in 2024... Are you ready to join them? At The Sociomatic, Take your
          chance to be one of them. &nbsp;
          <span className="font-semibold">
            we&apos;re on a mission to empower thirty businesses
          </span>
          &nbsp;this year with game-changing Google Ads strategies. &nbsp;
          <span className="text-secondary font-semibold">
            Get a FREE Google Ads audit today
          </span>
          &nbsp;and see how we can transform your business!
        </p>
      </div>
      <div className="py-[48px] relative">
        <LunarCircle className="absolute top-0 left-0 w-full h-full z-[-1]" />
        <div className="container flex flex-col gap-[48px]">
          <iframe
            className="w-full md:w-4/5 h-full min-h-[50vh] md:min-h-[70vh] rounded-2xl mx-auto border shadow-xl"
            src="https://www.youtube.com/embed/eRxKwyhM59U?si=R66bAMX4xLgmqoCf"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="flex justify-center">
            <ServicesCTA position="center" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeroSection;
