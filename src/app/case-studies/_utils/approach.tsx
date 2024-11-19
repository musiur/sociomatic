import Image from "next/image";
import { ReactElement } from "react";
import FeatureCartIconText from "./feature-card-icon-text";
import SectionSideImage from "./sections-side-image";
import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";

const Approach = ({
  data = approachData,
}: {
  data?: {
    title: ReactElement;
    description: ReactElement;
    approaches: { id: number; text: ReactElement }[];
    image: string;
  };
}) => {
  const { title, description, approaches, image } = data;
  return (
    <section className="container section space-y-[48px]">
      <ANIM__FadeInOutOnScroll className="max-w-[640px] mx-auto [&>*]:text-center space-y-[32px]">
        <h2>{title}</h2>
        <p>{description}</p>
      </ANIM__FadeInOutOnScroll>

      <ANIM__FadeInOutOnScroll className="grid gird-cols-1 md:grid-cols-2 items-center justify-center gap-16">
        <ANIM__FadeInOutOnScroll className="space-y-[32px]">
          {approaches.map((para: { id: number; text: ReactElement }) => {
            const { id, text } = para;
            return (
              <FeatureCartIconText
                key={id}
                id={id}
                text={text}
              />
            );
          })}
        </ANIM__FadeInOutOnScroll>
        <SectionSideImage image={image} />
      </ANIM__FadeInOutOnScroll>
    </section>
  );
};

export default Approach;

const approachData = {
  title: <>Our Strategic Approaches</>,
  description: (
    <span>
      With our easy-to-use solutions, start a smooth Google Ads experience to
      streamline the procedure for newbies to guarantee peak performance - the
      best Return On Investment (ROI)
    </span>
  ),
  approaches: [
    {
      id: 1,
      text: (
        <>
          Being delivered in a unique pill shape, this shaker eradicates
          supplement accumulation, creating a dynamic environment.
        </>
      ),
    },
    {
      id: 2,
      text: (
        <>
          The simplicity of such shakers is what makes ShareSphere unique in the
          industry. No corners means no smell.
        </>
      ),
    },
    {
      id: 3,
      text: (
        <>
          Being inspired by the idea of revolutionising the shaker bottle market
          and creating products that improve health.
        </>
      ),
    },
  ],
  image: "https://utfs.io/f/915ff318-de2b-4494-b3df-73a78967133d-9fmvb.png",
};
