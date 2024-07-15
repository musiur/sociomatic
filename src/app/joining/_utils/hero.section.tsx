import LunarCircle from "@/components/assets/lunar-circle";
import Tagline from "@/components/molecule/tagline";
import { ReactElement } from "react";

const HeroSectionJoining = ({
  data,
}: {
  data: {
    tagline: ReactElement;
    title: ReactElement;
    body: ReactElement;
  };
}) => {
  const { tagline, title, body } = data;

  return (
    <div className="py-16 relative">
      <LunarCircle className="absolute min-w-[1000px] top-0 left-0 w-full h-full z-[-1] rotate-180" />
      <div className="container flex flex-col items-center justify-center gap-[32px]">
        <Tagline text={tagline} />
        <h1 className="h1 text-primary text-center [&>span]:text-secondary [&>span]:mx-4">
          {title}
        </h1>
        <p className="max-w-[640px] text-center [&>span]:font-medium [&>span]:mx-1">
          {body}
        </p>
      </div>
    </div>
  );
};

export default HeroSectionJoining;
