import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import { FeatureWithBar } from "@/components/magicui/feature-with-bar";
import Tagline from "@/components/molecule/tagline";
import { ReactElement } from "react";

const WhatAndWhySection = ({
  data,
}: {
  data: {
    tagline: ReactElement;
    title: ReactElement;
    body: {
      para: ReactElement;
      benefits: {
        id: number;
        icon: ReactElement;
        title: ReactElement;
        paragraph: ReactElement;
      }[];
    };
  };
}) => {
  const { tagline, title, body } = data;
  const { para, benefits } = body;

  return (
    <div className="py-16 space-y-8">
      <ANIM__FadeInOutOnScroll className="container flex flex-col items-center justify-center gap-[32px]">
        <Tagline text={tagline} />
        <h2 className="h2 text-primary text-center [&>span]:text-secondary [&>span]:px-3">
          {title}
        </h2>
        <p className="max-w-[640px] text-center [&>span]:text-secondary [&>span]:px-1 [&>span]:font-semibold">
          {para}
        </p>
      </ANIM__FadeInOutOnScroll>
      <FeatureWithBar features={benefits} />
    </div>
  );
};

export default WhatAndWhySection;

