import { ReactElement } from "react";
import BlueGoogle from "../assets/blue-google";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";
import ANIM__FadeInOutOnScroll from "../anims/fadein.anim";

const FeatureCard = ({
  image = <BlueGoogle />,
  title = "Google Paid Advertising",
  description,
  list = ["Google search PPC and display", "Google shopping", "YouTube Ads"],
  link,
}: {
  image: ReactElement;
  title: string;
  description: ReactElement | undefined;
  list: any;
  link: string;
}) => {
  return (
    <ANIM__FadeInOutOnScroll className="rounded-[10px] border border-secondary-muted hover:border-secondary bg-white/5 backdrop-blur-[8px] hover:backdrop-blur-[8px] w-full px-[25px] py-[50px] shadow-[0_4px_25px_0_rgba(89,86,255,0.05)] transition ease-in-out duration-500 hover:scale-[1.05]">
      <div className="flex flex-col items-start justify-start small-gap">
        {image}
        <h4 className="font-medium text-primary">{title}</h4>
        {description ? (
          <p className="[&>span]:font-medium text-primary/80 [&>span]:text-primary">
            {description}
          </p>
        ) : null}
        <ul className="flex flex-col gap-[1rem] text-primary/80">
          {list.map((item: string, index: number) => {
            return (
              <li
                key={index}
                className="flex items-start justify-start gap-[6.7px]"
              >
                <BadgeCheck className="min-h-[16px] min-w-[16px] max-w-[16px] stroke-secondary stroke-[2px]" />
                &nbsp;
                {item}
              </li>
            );
          })}
        </ul>

        {link ? (
          <Link
            href={link}
            className="text-secondary hover:text-secondary/70 hover:underline"
          >
            Learn more
          </Link>
        ) : null}
      </div>
    </ANIM__FadeInOutOnScroll>
  );
};

export default FeatureCard;
