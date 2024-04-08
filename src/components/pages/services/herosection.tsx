import LunarCircle from "@/components/assets/lunar-circle";
import Springle from "@/components/assets/springle";
import Tagline from "@/components/molecule/tagline";
import { Button } from "@/components/ui/button";

const ServiceHeroSection = () => {
  return (
    <div className="py-16">
      <div className="container flex flex-col items-center justify-center gap-[32px]">
        <Tagline text="100% Trust Worthy Solutions" />
        <h1 className="h1 text-primary text-center">
          Setup, manage and <br />
          <span className="text-secondary relative">
            optimize
            <Springle className="absolute bottom-[-16px] left-0 z-[-1] w-full" />
          </span>
          &nbsp;with us
        </h1>
        <p className="max-w-[640px] text-center">
          With our easy-to-use solutions,&nbsp;
          <span className="font-semibold">
            start a smooth Google Ads experience
          </span>
          &nbsp;to streamline the procedure for newbies to guarantee peak
          performance - the best{" "}
          <span className="text-secondary font-semibold">
            Return On Investment
          </span>
          &nbsp; (ROI)
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
          <div className="grid grid-cols-1 sm:flex flex-wrap items-center justify-center gap-[12px]">
            <Button variant="secondary">Get Started right away</Button>
            <Button variant="outline">Get a free consultation</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeroSection;
