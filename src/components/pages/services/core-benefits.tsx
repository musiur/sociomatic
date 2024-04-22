import RoadmapBoard from "@/components/assets/roadmap-board";
import Springle from "@/components/assets/springle";
import ThreeBoxes from "@/components/assets/three-boxes";
import ThreeDStar from "@/components/assets/three-d-star";
import ThreeItemsStack from "@/components/assets/three-items-stack";
import ThreeRolesBar from "@/components/assets/three-roles-bar";
import TransactionDashboard from "@/components/assets/transactions-dashbaord";
import Tagline from "@/components/molecule/tagline";

const CoreBenefits = () => {
  const CardsData = [
    {
      id: 1,
      icon: <ThreeDStar />,
      title: "Direct Access & Measurable Results",
      description:
        "Focus on running your business while Yeatiq(CEO) and his team handle the heavy lifting of Google Ads, ensuring you get the most out of your advertising budget. Plus, you can contact Yeatiq directly through WhatsApp or email.",
    },
    {
      id: 2,
      icon: <ThreeBoxes />,
      title: "Get the Support You Deserve",
      description:
        "Stay aware of the crowd. We are here to answer your questions and address any concerns",
    },
    {
      id: 3,
      icon: <ThreeItemsStack />,
      title: "Ongoing Campaign Optimization",
      description:
        "continuously analyze data and refine your campaigns to maximize ROI and keep you ahead of the competition.",
    },
    {
      id: 4,
      icon: <ThreeRolesBar />,
      title: "Your Success is Our CEO's Passion",
      description:
        "Yeatiq is invested in your success and is always available to provide direct support and strategic insights.",
    },
  ];
  return (
    <div className="py-[64px]">
      <div className="container flex flex-col items-center justify-center gap-[32px]">
        <Tagline text="Core benefits" />
        <h2 className="h2 text-primary text-center">
          Additionally, When You&apos;re,
          <br />
          <span className="text-secondary relative">
            Part Of The Sociomatic Family
          </span>
        </h2>
        <p className="max-w-[640px] text-center">
          <span className="font-bold">
            We will Work Together, Learn together ,Build Together and Implement.
          </span>
          &nbsp; Joining Sociomatic Google Ads Family goes beyond powerful
          advertising strategies. Our community is dedicated to your success,
          offering a unique blend of expert guidance, results-driven support,
          and exclusive networking opportunities.
        </p>
      </div>
      <div className="container pt-[48px] grid grid-cols-1 sm:grid-cols-2 gap-10">
        {CardsData.map((item) => {
          const { id, title, description, icon } = item;
          return (
            <div key={id} className="space-y-[12px]">
              <div className="inline-block p-2 bg-white border  rounded-[10px] shadow-md">
                {icon}
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p>{description}</p>
            </div>
          );
        })}
        {/* <TransactionDashboard className="hidden lg:block h-auto" />
        <div className="flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-10">
          {CardsData.slice(2).map((item) => {
            const { id, title, description, icon } = item;
            return (
              <div key={id} className="space-y-[12px]">
                <div className="inline-block p-2 bg-white border border-gray-200 rounded-[10px] shadow-md">
                  {icon}
                </div>
                <h3 className="font-semibold">{title}</h3>
                <p>{description}</p>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default CoreBenefits;
