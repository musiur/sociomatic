import FadeInOnScroll from "@/components/anims/fadein-onscroll";
import { Star, Trophy, Zap } from "lucide-react";

const Characteristics = () => {
  return (
    <div className="max-w-[600px]">
      <ul className="flex flex-col gap-10">
        {characteristics.map((item) => {
          return (
            <li key={item.id}>
              <FadeInOnScroll>
                <div className="flex items-start gap-[8px]">
                  <div className="min-w-[30px]">{item.icon}</div>
                  <div className="flex flex-col gap-[4px]">
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </FadeInOnScroll>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Characteristics;

const characteristics = [
  {
    id: 1,
    title: "Top Rated",
    icon: <Star />,
    description:
      "Top Rated seller are individually selected by Fiverr after meeting specific bench and services",
  },
  {
    id: 2,
    title: "Buyers Keep Returning",
    icon: <Trophy />,
    description: "Yeatiq has an exceptional numbers of returning buyers",
  },
  {
    id: 3,
    title: "Highly Responsive",
    icon: <Zap />,
    description: "Known for exceptionally quick replies",
  },
];
