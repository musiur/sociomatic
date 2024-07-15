import { ReactElement } from "react";
import ANIM__FadeInOnScroll from "../anims/fadein.anim";

const SectionHead = ({
  highlighter = "Our Services",
  H2 = <>Understanding Your Business</>,
  paragraphs = [
    <>
      We&apos;ll listen to <span>your goals</span> and complete a free audit to
      discover if we&apos;re a great fit to work with each other.
    </>,
  ],
}: {
  highlighter: string;
  H2: ReactElement;
  paragraphs: any;
}) => {
  return (
    <ANIM__FadeInOnScroll className="flex flex-col items-center justify-center small-gap max-w-[566px] mx-auto text-center">
      {highlighter ? (
        <p className="text-[12px] md:text-[16px] text-secondary font-semibold inline-block px-4 py-[4px] rounded-full border border-primary/20">
          {highlighter}
        </p>
      ) : null}
      {H2 ? (
        <h2 className="text-primary [&>span]:text-secondary">{H2}</h2>
      ) : null}
      {paragraphs.length
        ? paragraphs.map((item: any, index: number) => {
            return (
              <p
                key={index}
                className="[&>span]:font-medium [&>span]:text-primary text-primary/80"
              >
                {item}
              </p>
            );
          })
        : null}
    </ANIM__FadeInOnScroll>
  );
};

export default SectionHead;
