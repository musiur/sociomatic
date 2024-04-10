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
      title: "Real-time update",
      description: "Sync your calendar and track your meeting expenses",
    },
    {
      id: 2,
      icon: <ThreeBoxes />,
      title: "Boost savings",
      description: "Sync your calendar and track your meeting expenses",
    },
    {
      id: 3,
      icon: <ThreeItemsStack />,
      title: "Testing feedback",
      description: "Sync your calendar and track your meeting expenses",
    },
    {
      id: 4,
      icon: <ThreeRolesBar />,
      title: "Boost savings",
      description: "Sync your calendar and track your meeting expenses.",
    },
  ];
  return (
    <div className="py-16">
      <div className="container flex flex-col items-center justify-center gap-[32px]">
        <Tagline text="Core benefits" />
        <h2 className="h2 text-primary text-center">
          Power&nbsp;
          <span className="text-secondary relative">
            your business
            {/* <Springle className="absolute bottom-[-12px] left-0 z-[-1] w-full" /> */}
          </span>
          <br />
          with sociomatic
        </h2>
        <p className="max-w-[640px] text-center">
          Sublime seamlessly integrates with your existing infrastructure,
          allowing you to effortlessly connect and consolidate data from various
          sources.
        </p>
      </div>
      <div className="container pt-[48px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-10">
          {CardsData.slice(0, 2).map((item) => {
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
        </div>
        <TransactionDashboard className="hidden lg:block h-auto" />
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
        </div>
      </div>
    </div>
  );
};

export default CoreBenefits;
