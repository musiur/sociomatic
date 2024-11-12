import clsx from "clsx";
import { ReactElement } from "react";

const FeatureCartIconText = ({
  id,
  text,
  alignment = "left",
}: {
  id: number;
  text: ReactElement;
  alignment?: "left" | "right";
}) => {
  return (
    <div
      key={id}
      className={clsx("flex items-center gap-[32px]", {
        "flex-row-reverse": alignment === "right",
        "flex-row": alignment === "left",
      })}
    >
      <div className="min-w-[40px] min-h-[40px] lg:min-w-[80px] lg:min-h-[80px] rounded-[10px] bg-secondary/10 text-secondary flex items-center justify-center text-2xl lg:text-4xl font-extrabold">
        0{id}
      </div>
      <p
        className={clsx("text-sm lg:text-base [&>span]:font-bold", {
          "text-left": alignment === "left",
          "text-right": alignment === "right",
        })}
      >
        {text}
      </p>
    </div>
  );
};

export default FeatureCartIconText;
