import clsx from "clsx";
import { Button } from "../ui/button";
import { ReactElement } from "react";
import EmailModal from "./email-modal";
import ANIM__FadeInOutOnScroll from "../anims/fadein.anim";
import Link from "next/link";

const ServicesCTA = ({
  position = "left",
  cta = {
    primary: {
      text: <></>,
      link: "/",
    },
    secondary: {
      text: <></>,
      link: "/#calendly",
    },
  },
}: {
  position?: "center" | "left" | "right";
  cta: {
    primary: { text: ReactElement; link: string };
    secondary: { text: ReactElement; link: string };
  };
}) => {
  const { primary, secondary } = cta;
  return (
    <ANIM__FadeInOutOnScroll>
      <p
        className={clsx("text-xs text-gray-400 py-2", {
          "text-center": position === "center",
          "text-left": position === "left",
          "text-right": position === "right",
        })}
      >
        Go Here To Fill Out A 2-Minute Application For The Free Resources
      </p>
      <div className="grid grid-cols-1 min-[400px]:flex flex-wrap items-center justify-start gap-[12px]">
        <EmailModal buttonText={primary.text} path={primary.link} />
        <Link href="/#calendly">
          <Button variant="outline">{secondary.text}</Button>
        </Link>
      </div>
    </ANIM__FadeInOutOnScroll>
  );
};

export default ServicesCTA;
