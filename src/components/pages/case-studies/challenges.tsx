import { ReactElement } from "react";
import FeatureCartIconText from "./feature-card-icon-text";

const Challenges = () => {
  return (
    <section className="bg-muted">
      <div className="container section space-y-[48px]">
        <div className="max-w-[640px] mx-auto [&>*]:text-center space-y-[32px]">
          <h2>Challenges We Have Faced</h2>
          <p>
            With our easy-to-use solutions, start a smooth Google Ads experience
            to streamline the procedure for newbies to guarantee peak
            performance - the best Return On Investment (ROI)
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {ChallengesCardData.map(
            (challenge: { id: number; text: ReactElement }) => {
              const { id, text } = challenge;
              return (
                <FeatureCartIconText
                  key={id}
                  id={id}
                  text={text}
                  alignment="left"
                />
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Challenges;

const ChallengesCardData = [
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
];