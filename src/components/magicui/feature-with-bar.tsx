import { cn } from "@/lib/utils";
import { Cloud, DollarSign, Heart, HelpCircle, LineChart, Route, Square, Terminal } from "lucide-react";
import { ReactElement } from "react";
import ANIM__FadeInOutOnScroll from "../anims/fadein.anim";

type Type__Feature = {
  title: ReactElement;
  paragraph: ReactElement;
  icon: ReactElement;
  id: number;
}


export function FeatureWithBar({features = defaultData}: {features?: Type__Feature[]}) {
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 container">
      {features.map((feature) => {
        const { id } = feature;
        return (
          <Feature key={id} {...feature} id={id} />
        )
      })}
    </div>
  );
}

const Feature = ({
  title,
  paragraph,
  icon,
  id,
}: Type__Feature) => {
  return (
    <ANIM__FadeInOutOnScroll
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (id === 0 || id === 4) && "lg:border-l dark:border-neutral-800",
        id < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {id < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {id >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 [&>svg]:h-8 [&>svg]:w-8 [&>svg]:stroke-[1.2px]">
        {icon}
      </div>
      <div className="text-lg font-medium mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block">
          {title}
        </span>
      </div>
      <p className="text-sm relative z-10 px-10">
        {paragraph}
      </p>
    </ANIM__FadeInOutOnScroll>
  );
};

const defaultData: Type__Feature[] = [
  {
    id: 1,
    title: <>Built for developers</>,
    paragraph:
      <>Built for engineers, developers, dreamers, thinkers and doers.</>,
    icon: <Terminal />,
  },
  {
    id: 2,
    title: <>Ease of use</>,
    paragraph:
      <>It&apos;s as easy as using an Apple, and as expensive as buying one.</>,
    icon: <LineChart />,
  },
  {
    id: 3,
    title: <>Pricing like no other</>,
    paragraph:
      <>Our prices are best in the market. No cap, no lock, no credit card required.</>,
    icon: <DollarSign />,
  },
  {
    id: 4,
    title: <>100% Uptime guarantee</>,
    paragraph: <>We just cannot be taken down by anyone.</>,
    icon: <Cloud />,
  },
  {
    id: 5,
    title: <>Multi-tenant Architecture</>,
    paragraph: <>You can simply share passwords instead of buying new seats</>,
    icon: <Route />,
  },
  {
    id: 6,
    title: <>24/7 Customer Support</>,
    paragraph:
      <>We are available a 100% of the time. Atleast our AI Agents are.</>,
    icon: <HelpCircle />,
  },
  {
    id: 7,
    title: <>Money back guarantee</>,
    paragraph:
      <>If you donot like EveryAI, we will convince you to like us.</>,
    icon: <Square />,
  },
  {
    id: 8,
    title: <>And everything else</>,
    paragraph: <>I just ran out of copy ideas. Accept my sincere apologies</>,
    icon: <Heart />,
  },
];
