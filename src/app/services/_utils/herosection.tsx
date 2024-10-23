import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import LunarCircle from "@/components/assets/lunar-circle";
import ServicesCTA from "@/components/molecule/services-cta";
import Tagline from "@/components/molecule/tagline";
import { ReactElement } from "react";

const ServiceHeroSection = ({
  data,
}: {
  data: {
    video: string;
    tagline: ReactElement;
    title: ReactElement;
    body: ReactElement;
    cta: {
      primary: {
        text: ReactElement;
        link: string;
      };
      secondary: {
        text: ReactElement;
        link: string;
      };
    };
  };
}) => {
  const { video, tagline, title, body, cta } = data;

  return (
    <div className="py-16">
      <ANIM__FadeInOutOnScroll className="container flex flex-col items-center justify-center gap-[32px]">
        <Tagline text={tagline} />
        <h1 className="h1 text-primary text-center [&>span]:text-secondary [&>span]:px-2">
          {title}
        </h1>
        <p className="max-w-[640px] text-center [&>span]:text-secondary [&>span]:px-1 [&>span]:font-semibold">
          {body}
        </p>
      </ANIM__FadeInOutOnScroll>
      <ANIM__FadeInOutOnScroll className="py-[48px] relative">
        <LunarCircle className="absolute top-0 left-0 w-full h-full z-[-1]" />
        <div className="container flex flex-col gap-[48px]">
          <iframe
            className="w-full md:w-4/5 h-full min-h-[50vh] md:min-h-[60vh] rounded-2xl mx-auto border shadow-xl"
            src={
              video ||
              "https://www.youtube.com/embed/eRxKwyhM59U?si=R66bAMX4xLgmqoCf"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="flex justify-center">
            <ServicesCTA
              position="center"
              cta={{
                ...cta,
                secondary: {
                  ...cta.secondary,
                  link: "/#calendly",
                },
              }}
            />
          </div>
        </div>
      </ANIM__FadeInOutOnScroll>
    </div>
  );
};

export default ServiceHeroSection;
