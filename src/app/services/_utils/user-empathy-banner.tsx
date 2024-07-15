import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import BlueLogoGradiantLightBg from "@/components/assets/blue-logo-gradiant-light-bg";
import Tagline from "@/components/molecule/tagline";
import { ReactElement } from "react";

const UserEmpathyBanner = ({
  data,
}: {
  data: { tagline: ReactElement; title: ReactElement; body: ReactElement };
}) => {
  const { tagline, title, body } = data;
  return (
    <ANIM__FadeInOutOnScroll className="container section [&>*]:text-white">
      <div className="p-8 rounded-[20px] md:rounded-[40px] bg-gradient-to-b from-secondary to-[#0B3399] flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-10">
        <ANIM__FadeInOutOnScroll className="max-w-full sm:max-w-[60%] flex flex-col items-start gap-[32px]">
          <Tagline text={tagline} />
          <h3 className="text-xl sm:text-3xl font-medium">{title}</h3>
          <p>{body}</p>
        </ANIM__FadeInOutOnScroll>
        <BlueLogoGradiantLightBg className="hidden sm:block ml-auto" />
      </div>
    </ANIM__FadeInOutOnScroll>
  );
};

export default UserEmpathyBanner;
