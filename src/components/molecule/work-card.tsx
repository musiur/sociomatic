import { ReactElement } from "react";
import I from "../assets/I";
import Requirements from "../assets/requirements";
import ANIM__FadeInOutOnScroll from "../anims/fadein.anim";

const WorkCard = ({
  id = 1,
  numberImage = (
    <>
      <div className="min-w-[59px]">
        <I />
      </div>
    </>
  ),
  image = <Requirements />,
  title = "Requirement Analysis",
  description = (
    <>
      Once you&apos;re <span>fully satisfied</span> , we will hand over all the
      files in all the formats and <span>variations you require.</span> We often
      go the extra mile!.
    </>
  ),
}: {
  id: number;
  numberImage: ReactElement;
  image: ReactElement;
  title: string;
  description: ReactElement;
}) => {
  return (
    <ANIM__FadeInOutOnScroll
      className={`flex gap-[25px] lg:gap-[100px] max-w-[785px] justify-center items-center ${
        id % 2 === 0 ? "ml-auto flex-row-reverse" : "mr-auto"
      } shrink-0`}
    >
      <div className="hidden sm:block">{numberImage}</div>

      <div
        className={`flex flex-col min-[380px]:flex-row items-center justify-center small-gap max-w-[625px] ${
          id % 2 === 0 ? "sm:flex-row-reverse sm:text-right" : ""
        } [&>svg]:min-w-[100px] [&>svg]:min-h-[100px]`}
      >
        {image}

        <div className="flex flex-col small-gap">
          <p className="text-[20px] md:text-[24px] font-medium text-primary">
            {title}
          </p>
          <p className="[&>span]:font-medium [&>span]:text-primary text-primary/80">
            {description}
          </p>
        </div>
      </div>
    </ANIM__FadeInOutOnScroll>
  );
};
export default WorkCard;
