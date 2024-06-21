import Image from "next/image";
import { ReactElement } from "react";
import FeatureCartIconText from "./feature-card-icon-text";
import SectionSideImage from "./sections-side-image";
import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";

const Results = ({
  data = resultData,
}: {
  data?: { image: string; results: { id: number; text: ReactElement }[] };
}) => {
  const { image, results } = data;
  return (
    <ANIM__FadeInOutOnScroll className="container section space-y-[48px]">
      <div className="max-w-[640px] mx-auto [&>*]:text-center space-y-[32px]">
        <h2>The Results</h2>
      </div>

      <ANIM__FadeInOutOnScroll className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10">
        <SectionSideImage image={image} />
        <ANIM__FadeInOutOnScroll className="space-y-[32px]">
          {results.map((para: { id: number; text: ReactElement }) => {
            const { id, text } = para;
            return <FeatureCartIconText key={id} id={id} text={text} />;
          })}
        </ANIM__FadeInOutOnScroll>
      </ANIM__FadeInOutOnScroll>
    </ANIM__FadeInOutOnScroll>
  );
};

export default Results;

const resultData = {
  image: "https://utfs.io/f/915ff318-de2b-4494-b3df-73a78967133d-9fmvb.png",
  results: [
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
    {
      id: 4,
      text: (
        <>
          Being inspired by the idea of revolutionising the shaker bottle market
          and creating products that improve health.
        </>
      ),
    },
  ],
};
