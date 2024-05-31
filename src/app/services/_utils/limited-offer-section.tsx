import Springle from "@/components/assets/springle";
import TransactionDashboard from "@/components/assets/transactions-dashbaord";
import ServicesCTA from "@/components/molecule/services-cta";
import { Button } from "@/components/ui/button";
import { ReactElement } from "react";

const LimitedOfferSection = ({
  data,
}: {
  data: {
    tagline: ReactElement;
    title: ReactElement;
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
  const { title, body, cta } = data;
  const { para, benefits } = body;
  return (
    <div className="container pb-[96px] flex flex-col min-[700px]:flex-row gap-10 items-center justify-center">
      <TransactionDashboard className="w-full hidden sm:block" />
      <div className="space-y-[32px] max-w-[600px]">
        <h2 className="h2 text-primary leading-normal">{title}</h2>
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
                  <span className="font-semibold">{item.title}</span>
                  {paragraph}
                </li>
              );
            }
          )}
        </ul>
        <ServicesCTA cta={cta} />
      </div>
    </div>
  );
};

export default LimitedOfferSection;
