import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import LunarCircle from "@/components/assets/lunar-circle";
import ServicesCTA from "@/components/molecule/services-cta";
import Tagline from "@/components/molecule/tagline";
import { ReactElement } from "react";

const Hero = ({
  data,
}: {
  data: {
    tagline: ReactElement;
    title: ReactElement;
    body: ReactElement;
    features: {
      id: number;
      icon: ReactElement;
      text: ReactElement;
    }[];
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
  const { tagline, title, body, cta } = data;

  return (
    <div className="py-16 relative">
      <LunarCircle className="absolute min-w-[1000px] top-0 left-0 w-full h-full z-[-1] rotate-180" />
      <ANIM__FadeInOutOnScroll className="container flex flex-col items-center justify-center gap-[32px]">
        <Tagline text={tagline} />
        <h1 className="h1 text-primary text-center [&>span]:text-secondary">
          {title}
        </h1>
        <p className="max-w-[640px] text-center">{body}</p>
        <div className="flex flex-wrap items-center justify-center gap-16">
          {data.features.map((feature) => {
            const { id, text, icon } = feature;
            return (
              <div
                key={id}
                className="inline-flex items-center gap-2 [&>svg]:stroke-[2px] [&>svg]:stroke-secondary"
              >
                {icon}
                <p className="inline-flex gap-1 [&>span]:text-primary font-medium text-primary/50">
                  {text}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <ServicesCTA position="center" cta={cta} />
        </div>
      </ANIM__FadeInOutOnScroll>
    </div>
  );
};

export default Hero;
