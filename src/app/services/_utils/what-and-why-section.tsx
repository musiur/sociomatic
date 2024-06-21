import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import ThreeDStar from "@/components/assets/three-d-star";
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
    <div className="py-16 bg-muted">
      <ANIM__FadeInOutOnScroll className="container flex flex-col items-center justify-center gap-[32px]">
        <Tagline text={tagline} />
        <h2 className="h2 text-primary text-center [&>span]:text-secondary [&>span]:px-3">
          {title}
        </h2>
        <p className="max-w-[640px] text-center [&>span]:text-secondary [&>span]:px-1 [&>span]:font-semibold">
          {para}
        </p>
      </ANIM__FadeInOutOnScroll>
      <div className="container pt-[48px] space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3">
          {benefits.map(
            (item: {
              id: number;
              icon: ReactElement;
              title: ReactElement;
              paragraph: ReactElement;
            }) => {
              const { id, paragraph, icon } = item;
              return (
                <ANIM__FadeInOutOnScroll
                  key={id}
                  className="p-4 rounded-2xl border-2 border-white hover:border-secondary hover:scale-105 bg-white transition ease-in-out duration-500 hover:shadow-2xl"
                >
                  <div className="space-y-[12px] p-2">
                    {<ThreeDStar />}
                    <h3 className="font-semibold">{item.title}</h3>
                    <p>{paragraph}</p>
                  </div>
                </ANIM__FadeInOutOnScroll>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default WhatAndWhySection;
