import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import { FeatureWithGrid } from "@/components/magicui/feature-with-grid";
import Tagline from "@/components/molecule/tagline";
import { ReactElement } from "react";

const CoreBenefits = ({
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
        para: ReactElement;
      }[];
    };
  };
}) => {
  const { tagline, title, body } = data;
  const { para, benefits } = body;
  return (
    <div className="pt-[64px] pb-[128px] space-y-8">
      <ANIM__FadeInOutOnScroll className="container flex flex-col items-center justify-center gap-[32px]">
        <Tagline text={tagline} />
        <h2 className="h2 text-primary text-center [&>span]:text-secondary [&>span]:px-3">
          {title}
        </h2>
        <p className="max-w-[640px] text-center [&>span]:text-secondary [&>span]:px-1 [&>span]:font-semibold">
          {para}
        </p>
      </ANIM__FadeInOutOnScroll>
      <FeatureWithGrid features={benefits} />
    </div>
  );
};

export default CoreBenefits;


{/* <ANIM__FadeInOutOnScroll className="container pt-[48px] grid grid-cols-1 sm:grid-cols-2 gap-10">
        {benefits.map(
          (item: {
            id: number;
            icon: ReactElement;
            title: ReactElement;
            para: ReactElement;
          }) => {
            const { id, title, icon } = item;
            return (
              <div key={id} className="space-y-[12px]">
                <div className="inline-block p-2 bg-white border  rounded-[10px] shadow-md">
                  {<ThreeDStar />}
                </div>
                <h3 className="font-semibold">{title}</h3>
                <p>{item.para}</p>
              </div>
            );
          }
        )}
      </ANIM__FadeInOutOnScroll> */}
