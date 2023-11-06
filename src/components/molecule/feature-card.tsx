import { ReactElement } from "react";
import BlueGoogle from "../assets/blue-google";

const FeatureCard = ({
  image = <BlueGoogle />,
  title = "Google Paid Advertising",
  description = (
    <>
      Enhance Google platform ad strategies for effective{" "}
      <span>demand-driven</span> results.
    </>
  ),
}: {
  image: ReactElement;
  title: string;
  description: ReactElement;
}) => {
  return (
    <div className="rounded-[10px] border border-secondary-muted hover:border-secondary bg-white/5 backdrop-blur-[8px] hover:backdrop-blur-[8px] max-w-[382px] px-[25px] py-[50px] shadow-[0_4px_25px_0_rgba(89,86,255,0.05)] transition ease-in-out duration-500">
      <div className="flex flex-col items-start justify-start small-gap">
        {image}
        <h4 className="font-bold text-primary">{title}</h4>
        <p className="[&>span]:font-medium [&>span]:text-primary">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
