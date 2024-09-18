import Image from "next/image";
import ANIM__FadeInOutOnScroll from "../anims/fadein.anim";

const TestimonialUserCard = ({
  name = "John Doe",
  country = "User @Example",
  imageSlug = "user1",
  selected = false,
}: {
  name: string;
  country: string;
  imageSlug: string;
  selected: boolean;
}) => {
  return (
    <ANIM__FadeInOutOnScroll
      className={`w-auto h-auto p-[3px] border ${
        selected ? "border-secondary" : "border-secondarymuted"
      } hover:border-secondary rounded-[10px] cursor-pointer bg-white/60 backdrop-blur-xl`}
    >
      <div className="flex flex-col-reverse items-center justify-start gap-[5px] ">
        <div
          className={`w-full h-[8px]  ${
            selected ? "bg-secondary" : "bg-secondarymuted"
          } rounded-b-full`}
        ></div>
        <div className="flex flex-col flex-wrap items-center justify-start gap-[5px]  p-[5px] ">
          <div className="flex flex-col items-center justify-center gap-[10px] ">
            <p className="font-medium text-primary text-[12px]">
              {name.slice(0, 15)}
              {name.length > 15 ? "..." : null}
            </p>
            <Image
              src={`/images/flags/${country}`}
              alt=""
              width={1000}
              height={1000}
              className="w-[30px]"
            />
          </div>
        </div>
      </div>
    </ANIM__FadeInOutOnScroll>
  );
};

export default TestimonialUserCard;
