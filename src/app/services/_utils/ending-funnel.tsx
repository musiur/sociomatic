import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import TransactionDashboard from "@/components/assets/transactions-dashbaord";
import ServicesCTA from "@/components/molecule/services-cta";
import { ReactElement } from "react";

const EndingFunnel = ({
  data,
}: {
  data: {
    tagline: ReactElement;
    title: ReactElement;
    body: ReactElement;
    cta: {
      primary: { text: ReactElement; link: string };
      secondary: { text: ReactElement; link: string };
    };
  };
}) => {
  const { tagline, title, body, cta } = data;
  return (
    <div className="bg-muted">
      <ANIM__FadeInOutOnScroll className="container py-[64px] flex flex-col min-[700px]:flex-row gap-10 items-center justify-center">
        <ANIM__FadeInOutOnScroll className="space-y-[32px] max-w-[600px]">
          <h2 className="text-3xl text-primary leading-normal [&>span]:text-secondary [&>span]:text-3xl [&>span]:px-3">
            {title}
          </h2>
          <p className="max-w-[640px] [&>span]:text-secondary [&>span]:px-1 [&>span]:font-semibold">
            {body}
          </p>

          <ServicesCTA cta={cta} />
        </ANIM__FadeInOutOnScroll>
        <TransactionDashboard className="w-full hidden sm:block" />
      </ANIM__FadeInOutOnScroll>
    </div>
  );
};

export default EndingFunnel;
