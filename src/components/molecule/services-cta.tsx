import clsx from "clsx";
import { Button } from "../ui/button";

const ServicesCTA = ({
  position = "left",
}: {
  position?: "center" | "left" | "right";
}) => {
  return (
    <div>
      <p
        className={clsx("text-xs text-gray-400 py-2", {
          "text-center": position === "center",
          "text-left": position === "left",
          "text-right": position === "right",
        })}
      >
        Go Here To Fill Out A 2-Minute Application For The Coaching Program
      </p>
      <div className="grid grid-cols-1 min-[400px]:flex flex-wrap items-center justify-start gap-[12px]">
        <Button variant="secondary">Get Started right away</Button>
        <Button variant="outline">Get a free consultation</Button>
      </div>
    </div>
  );
};

export default ServicesCTA;
