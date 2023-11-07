import { ReactElement } from "react";
import BlueGoogle from "../assets/blue-google";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";

const FeatureCard = ({
  image = <BlueGoogle />,
  title = "Google Paid Advertising",
  description = (
    <>
      Enhance Google platform ad strategies for effective{" "}
      <span>demand-driven</span> results.
    </>
  ),
  list = ["Google search PPC and display", "Google shopping", "YouTube Ads"],
  link = "/",
}: {
  image: ReactElement;
  title: string;
  description: ReactElement;
  list: any;
  link: string;
}) => {
  // max-w-[365px]
  return (
    <div className="rounded-[10px] border border-secondary-muted hover:border-secondary bg-white/5 backdrop-blur-[8px] hover:backdrop-blur-[8px] w-full px-[25px] py-[50px] shadow-[0_4px_25px_0_rgba(89,86,255,0.05)] transition ease-in-out duration-500">
      <div className="flex flex-col items-start justify-start small-gap">
        {image}
        <h4 className="font-bold text-primary">{title}</h4>
        <p className="[&>span]:font-medium [&>span]:text-primary">
          {description}
        </p>
        <ul>
          {list.map((item: string, index: number) => {
            return (
              <li
                key={index}
                className="flex items-start justify-start gap-[6.7px]"
              >
                <BadgeCheck className="mt-[4px] h-[16px] w-[16px] stroke-dimmed stroke-[1.3px]" />{" "}
                <span>{item}</span>
              </li>
            );
          })}
        </ul>
        <Link href={link} className="text-primary hover:text-secondary">
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
