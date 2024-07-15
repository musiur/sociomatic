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
      className={`w-auto lg:w-[250px] h-auto lg:h-[100px] p-[3px] border ${
        selected ? "border-secondary" : "border-secondarymuted"
      } hover:border-secondary rounded-[10px] cursor-pointer bg-white/60 backdrop-blur-xl`}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-start gap-[5px] lg:gap-[10px]">
        <div
          className={`w-full lg:w-[8px] h-[8px] lg:h-[92px] ${
            selected ? "bg-secondary" : "bg-secondarymuted"
          } rounded-b-full lg:rounded-l-full lg:rounded-br-none`}
        ></div>
        <div className="flex flex-col lg:flex-row flex-wrap items-center justify-start gap-[5px] lg:gap-[10px] p-[5px] lg:p-0">
          {/* <Image
            src={`/images/pages/home/testimonial/${imageSlug}.png`}
            alt=""
            width={500}
            height={500}
            className="w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] rounded-full bg-secondary"
          /> */}
          <div className="flex flex-col items-center lg:items-start justify-center gap-[10px] ">
            <p className="font-medium text-primary text-[12px] sm:text-[14px] lg:text-[20px]">
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
