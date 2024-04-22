import RoadmapBoard from "@/components/assets/roadmap-board";
import Springle from "@/components/assets/springle";
import ThreeDStar from "@/components/assets/three-d-star";
import Tagline from "@/components/molecule/tagline";

const WhatAndWhySection = () => {
  const CardsData2 = [
    {
      id: 1,
      icon: <ThreeDStar />,
      title: "Real-time update",
      description:
        "Sync your calendar and track your meeting expenses. Mercury will read this and categorize your expense against your budget in seconds.",
    },
    {
      id: 2,
      icon: <ThreeDStar />,
      title: "Testing feedback",
      description:
        "Sync your calendar and track your meeting expenses. Mercury will read this and categorize your expense against your budget in seconds.",
    },
    {
      id: 3,
      icon: <ThreeDStar />,
      title: "Boost savings",
      description:
        "Sync your calendar and track your meeting expenses. Mercury will read this and categorize your expense against your budget in seconds.",
    },
    {
      id: 4,
      icon: <ThreeDStar />,
      title: "Thousands of data sources",
      description:
        "Sync your calendar and track your meeting expenses. Mercury will read this and categorize your expense against your budget in seconds.",
    },
    {
      id: 5,
      icon: <ThreeDStar />,
      title: "Focusing on Commitment",
      description:
        "Sync your calendar and track your meeting expenses. Mercury will read this and categorize your expense against your budget in seconds.",
    },
    {
      id: 6,
      icon: <ThreeDStar />,
      title: "Boost savings",
      description:
        "Sync your calendar and track your meeting expenses. Mercury will read this and categorize your expense against your budget in seconds.",
    },
  ];
  return (
    <div className="py-16 bg-muted">
      <div className="container flex flex-col items-center justify-center gap-[32px]">
        <Tagline text="Sociomatic Google Ads Service" />
        <h2 className="h2 text-primary text-center">
          Frustrated with Static Growth?&nbsp;
          <span className="text-secondary relative">
            We Help Businesses Explode
          </span>
          with Targeted Google Ads.
        </h2>
        <p className="max-w-[640px] text-center">
          <span className="font-semibold">
            We are a passionate team of Google Ads specialists with a proven
            track record of helping businesses achieve explosive growth.
          </span>
          &nbsp;Our data-driven approach and focus on results ensure your
          campaigns are optimized for maximum impact.
        </p>
      </div>
      <div className="container pt-[48px] space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-3">
          {CardsData2.map((item) => {
            const { id, title, description, icon } = item;
            return (
              <div
                key={id}
                className="p-4 rounded-2xl border-2 border-white hover:border-secondary hover:scale-105 bg-white transition ease-in-out duration-500 hover:shadow-2xl"
              >
                <div className="space-y-[12px] p-2">
                  {icon}
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
