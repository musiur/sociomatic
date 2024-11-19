import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import MagnifierImage from "@/components/molecule/magnifier-image";
import ServicesCTA from "@/components/molecule/services-cta";
import Image from "next/image";
import { ReactElement } from "react";

const LimitedOfferSection = ({
  data,
}: {
  data: {
    tagline: ReactElement;
    title: ReactElement;
    image: string;
    body: {
      para: ReactElement;
      benefits: { id: number; title: ReactElement; paragraph: ReactElement }[];
    };
    cta: {
      primary: { text: ReactElement; link: string };
      secondary: { text: ReactElement; link: string };
    };
  };
}) => {
  const { title, body, cta, image } = data;
  const { para, benefits } = body;
  const defaultImage =
    "https://utfs.io/f/TLm9XcQ0Drp9XyQOfuw2mQDWcPdinh2OTCGSAMHj5ubsEyo1";
  return (
    <div className="container pb-[96px] flex flex-col min-[700px]:flex-row gap-10 items-center justify-center">
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

      <ANIM__FadeInOutOnScroll className="space-y-[32px] max-w-[600px]">
        <h2 className="h2 text-primary leading-normal [&>span]:px-3 [&>span]:text-secondary [&>span]:bg-muted">
          {title}
        </h2>
        <p>{para}</p>
        <ul className="space-y-4">
          {benefits.map(
            (item: {
              id: number;
              title: ReactElement;
              paragraph: ReactElement;
            }) => {
              const { id, paragraph } = item;
              return (
                <li key={id}>
                  <span className="font-semibold text-secondary pr-1">
                    {item.title}
                  </span>
                  {paragraph}
                </li>
              );
            }
          )}
        </ul>
        <ServicesCTA cta={cta} />
      </ANIM__FadeInOutOnScroll>
    </div>
  );
};

export default LimitedOfferSection;
