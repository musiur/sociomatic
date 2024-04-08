import RoadmapBoard from "@/components/assets/roadmap-board";
import Springle from "@/components/assets/springle";
import Tagline from "@/components/molecule/tagline";

const WhatAndWhySection = () => {
  const CardsData1 = [
    {
      id: 1,
      image: <RoadmapBoard />,
      title: "Thousands of data sources",
      description: (
        <>
          Sync your calendar and track your meeting expenses. Mercury will read
          this and categorize your expense against your budget in seconds.
        </>
      ),
    },
    {
      id: 2,
      image: <RoadmapBoard />,
      title: "Focusing on Commitment",
      description: (
        <>
          Sync your calendar and track your meeting expenses. Mercury will read
          this and categorize your expense against your budget in seconds.
        </>
      ),
    },
  ];
  const CardsData2 = [
    {
      id: 1,
      title: "Real-time update",
      description:
        "Sync your calendar and track your meeting expenses. Mercury will read this and categorize your expense against your budget in seconds.",
    },
    {
      id: 2,
      title: "Testing feedback",
      description:
        "Sync your calendar and track your meeting expenses. Mercury will read this and categorize your expense against your budget in seconds.",
    },
    {
      id: 3,
      title: "Boost savings",
      description:
        "Sync your calendar and track your meeting expenses. Mercury will read this and categorize your expense against your budget in seconds.",
    },
  ];
  return (
    <div className="py-16">
      <div className="container flex flex-col items-center justify-center gap-[32px]">
        <Tagline text="Sociomatic Google Ads Service" />
        <h2 className="h2 text-primary text-center">
          Our solution &nbsp;
          <span className="text-secondary relative">
            empowers
            <Springle className="absolute bottom-[-8px] left-0 z-[-1] w-full" />
          </span>
          <br />
          the marketing freedom
        </h2>
        <p className="max-w-[640px] text-center">
          With our easy-to-use solutions,&nbsp;
          <span className="font-semibold">
            start a smooth Google Ads experience
          </span>
          &nbsp;to streamline the procedure for newbies to guarantee peak
          performance - the best&nbsp;
          <span className="text-secondary font-semibold">
            Return On Investment
          </span>
          &nbsp; (ROI)
        </p>
      </div>
      <div className="container pt-[48px] space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {CardsData1.map((item) => {
            const { id, image, title, description } = item;
            return (
              <div key={id} className="p-4 bg-gray-100 rounded-[40px]">
                <div className="rounded-2xl overflow-hidden [&>svg]:w-full [&>svg]:h-auto">
                  {image}
                </div>
                <div className="space-y-[12px] p-2 pt-8">
                  <h3 className="font-semibold">{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:grid-cols-3">
          {CardsData2.map((item) => {
            const { id, title, description } = item;
            return (
              <div key={id} className="p-4 rounded-2xl border border-[#dedede]">
                <div className="space-y-[12px] p-2">
                  <h3 className="font-semibold">{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatAndWhySection;
