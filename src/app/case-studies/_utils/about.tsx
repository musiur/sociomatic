import { ReactElement } from "react";
import SectionSideImage from "./sections-side-image";
import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";

const About = ({
  data = paragraphsData,
}: {
  data?: {
    image: string;
    paragraphs: { id: number; text: ReactElement }[];
  };
}) => {
  const { image, paragraphs } = data;
  return (
    <ANIM__FadeInOutOnScroll className="container section grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10">
      <SectionSideImage image={image} />
      <div className="max-w-[580px] space-y-[48px]">
        <h2>About the Brand</h2>
        <div className="space-y-[24px]">
          {paragraphs.map((para: { id: number; text: ReactElement }) => {
            const { id, text } = para;
            return (
              <p key={id} className="text-sm lg:text-base [&>span]:font-bold">
                {text}
              </p>
            );
          })}
        </div>
      </div>
    </ANIM__FadeInOutOnScroll>
  );
};

export default About;

const paragraphsData = {
  image: "https://utfs.io/f/915ff318-de2b-4494-b3df-73a78967133d-9fmvb.png",
  paragraphs: [
    {
      id: 1,
      text: (
        <>
          Being delivered in a unique pill shape, this shaker eradicates
          supplement accumulation, creating a dynamic environment for a superior
          mix that doesn&apos;t require a mixing ball or mesh grid.
        </>
      ),
    },
    {
      id: 2,
      text: (
        <>
          The simplicity of such shakers is what makes ShareSphere unique in the
          industry. No corners means no smell, less and easier cleaning, and
          completely no wastage.
        </>
      ),
    },
    {
      id: 3,
      text: (
        <>
          Being inspired by the idea of revolutionising the shaker bottle market
          and creating products that improve health, ShakeSphere Bottle is a
          go-to solution for before, during, and after a workout.
        </>
      ),
    },
  ],
};
