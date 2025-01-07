import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ReactElement } from "react";
import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import MagnifierImage from "@/components/molecule/magnifier-image";

const OurReview = ({
  data = reviewData,
}: {
  data?: {
    title: string;
    description: ReactElement;
    review: {
      name: string;
      qouteText: ReactElement;
      org: string;
      avatar: string;
    };
    image: string;
  };
}) => {
  const { title, description, review, image } = data;
  const { avatar, qouteText, org, name } = review;
  const defaultImage =
    "https://utfs.io/f/915ff318-de2b-4494-b3df-73a78967133d-9fmvb.png";
  return (
    <section className="bg-gradient-to-tr from-primary to-secondary [&>*]:text-white">
      <div className="container section space-y-[48px]">
        <ANIM__FadeInOutOnScroll className="max-w-[640px] mx-auto [&>*]:text-center space-y-[32px]">
          <h2>{title}</h2>
          <p>{description}</p>
        </ANIM__FadeInOutOnScroll>

        <ANIM__FadeInOutOnScroll className="flex flex-col min-[950px]:flex-row items-center justify-center gap-16">
          <ANIM__FadeInOutOnScroll className="max-w-[500px] space-y-[32px]">
            <div className="text-lg md:text-xl xl:text-2xl text-center min-[950px]:text-right italic text-white/60 [&>span]:text-white [&>span]:text-lg md:[&>span]:text-xl xl:[&>span]:text-2xl [&>span]:font-bold [&>span]:px-2">
              {qouteText}
            </div>
            <div className="flex items-center justify-center min-[950px]:justify-end gap-4">
              <div className="space-y-1 order-2 min-[950px]:order-1">
                <p className="hover:underline font-semibold text-lg md:text-xl text-left min-[950px]:text-right">
                  {name}
                </p>
                <p className="text-xs md:text-base text-white/60">{org}</p>
              </div>
              <Avatar className="order-1 min-[950px]:order-1">
                <AvatarImage src={avatar} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </ANIM__FadeInOutOnScroll>
          <div className="max-w-[500px] h-auto">
            {image && image !== defaultImage ? (
              <MagnifierImage
                src={image}
                alt=""
                width={500}
                height={500}
                className="max-w-[400px] max-h-[500px] my-auto rounded-[40px]"
              />
            ) : (
              <Image
                src={defaultImage}
                alt=""
                width={500}
                height={500}
                className="max-w-[400px] max-h-[500px] my-auto"
              />
            )}
          </div>
        </ANIM__FadeInOutOnScroll>
      </div>
    </section>
  );
};

export default OurReview;

const reviewData = {
  title: "Trust That We Gain",
  description: (
    <>
      With our easy-to-use solutions, start a smooth Google Ads experience to
      streamline the procedure for newbies to guarantee peak performance - the
      best Return On Investment (ROI)
    </>
  ),
  review: {
    qouteText: (
      <>
        &quot;&nbsp; Being delivered in a unique pill shape, this shaker
        eradicates supplement accumulation, creating a dynamic environment for a
        superior mix that doesn&apos;t require a mixing ball or mesh grid. The
        simplicity of such shakers is what makes ShareSphere unique in the
        industry. No corners means no smell, less and easier cleaning, and
        completely no wastage&nbsp;&quot;
      </>
    ),
    name: "Hanna Sillitoe",
    avatar: "https://github.com/shadcn.png",
    org: "Skin Healing Expert, BBC Dragon's Den Brand",
  },
  image: "https://utfs.io/f/915ff318-de2b-4494-b3df-73a78967133d-9fmvb.png",
};
