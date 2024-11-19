import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import MagnifierImage from "@/components/molecule/magnifier-image";
import ServicesCTA from "@/components/molecule/services-cta";
import Image from "next/image";
import { ReactElement } from "react";

const EndingFunnel = ({
  data,
}: {
  data: {
    tagline: ReactElement;
    title: ReactElement;
    body: ReactElement;
    image: string;
    cta: {
      primary: { text: ReactElement; link: string };
      secondary: { text: ReactElement; link: string };
    };
  };
}) => {
  const { title, body, cta, image } = data;
  const defaultImage =
    "https://utfs.io/f/TLm9XcQ0Drp9e77PXjmMg12HplPK8sxy493Dm0uSbhzjXZnE";
  return (
    <div className="bg-muted">
      <ANIM__FadeInOutOnScroll className="container py-[64px] flex flex-col-reverse min-[700px]:flex-row gap-10 items-center justify-center">
        <ANIM__FadeInOutOnScroll className="space-y-[32px] max-w-[600px]">
          <h2 className="text-3xl text-primary leading-normal [&>span]:text-secondary [&>span]:text-3xl [&>span]:px-3">
            {title}
          </h2>
          <p className="max-w-[640px] [&>span]:text-secondary [&>span]:px-1 [&>span]:font-semibold">
            {body}
          </p>

          <ServicesCTA cta={cta} />
        </ANIM__FadeInOutOnScroll>
        <div className="max-w-[460px]">
          {image && image !== defaultImage ? (
            <MagnifierImage
              src={image}
              alt="limited offer"
              width={500}
              height={500}
              className="w-full h-auto max-w-[400px] rounded-[40px]"
            />
          ) : (
            <Image
              src={defaultImage}
              alt="limited offer"
              width={500}
              height={500}
              className="w-full h-auto max-w-[400px] rounded"
            />
          )}
        </div>
      </ANIM__FadeInOutOnScroll>
    </div>
  );
};

export default EndingFunnel;
