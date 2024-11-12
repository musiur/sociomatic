import { ReactElement } from "react";
import FeatureCartIconText from "./feature-card-icon-text";
import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";

const Challenges = ({
  data = Challengesdata,
}: {
  data?: {
    title: ReactElement;
    description: ReactElement;
    challenges: { id: number; text: ReactElement }[];
  };
}) => {
  const { title, description, challenges } = data;
  return (
    <section className="bg-muted">
      <ANIM__FadeInOutOnScroll className="container section space-y-[48px]">
        <div className="max-w-[640px] mx-auto [&>*]:text-center space-y-[32px]">
          <h2>{title}</h2>
          <p className="[&>span]:font-bold">{description}</p>
        </div>
        <ANIM__FadeInOutOnScroll className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {challenges.map((challenge: { id: number; text: ReactElement }) => {
            const { id, text } = challenge;
            return (
              <FeatureCartIconText
                key={id}
                id={id}
                text={text}
                alignment="left"
              />
            );
          })}
        </ANIM__FadeInOutOnScroll>
      </ANIM__FadeInOutOnScroll>
    </section>
  );
};

export default Challenges;

const Challengesdata = {
  title: <>Challenges We Have Faced</>,
  description:
    <>With our easy-to-use solutions, start a smooth Google Ads experience to streamline the procedure for newbies to guarantee peak performance - the best Return On Investment (ROI)</>,
  challenges: [
    {
      id: 1,
      text: (
        <>
          The brand had a pretty good listing as a &quot;sports shaker&quot; in
          the Top 5 of the product category on Amazon US.
        </>
      ),
    },
    {
      id: 2,
      text: (
        <>
          The brand had a pretty good listing as a &quot;sports shaker&quot; in
          the Top 5 of the product category on Amazon US.
        </>
      ),
    },
    {
      id: 3,
      text: (
        <>
          The brand had a pretty good listing as a &quot;sports shaker&quot; in
          the Top 5 of the product category on Amazon US.
        </>
      ),
    },
    {
      id: 4,
      text: (
        <>
          The brand had a pretty good listing as a &quot;sports shaker&quot; in
          the Top 5 of the product category on Amazon US.
        </>
      ),
    },
    {
      id: 5,
      text: (
        <>
          The brand had a pretty good listing as a &quot;sports shaker&quot; in
          the Top 5 of the product category on Amazon US.
        </>
      ),
    },
    {
      id: 6,
      text: (
        <>
          The brand had a pretty good listing as a &quot;sports shaker&quot; in
          the Top 5 of the product category on Amazon US.
        </>
      ),
    },
  ],
};
