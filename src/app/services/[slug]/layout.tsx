import { ReactElement } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Sociomatic",
  description:
    "Explore Sociomatic's comprehensive services, from digital marketing strategies to web development solutions. Discover how we can elevate your business in the digital landscape.",
};

const ServiceLayout = ({ children }: { children: ReactElement }) => {
  return <div>{children}</div>;
};

export default ServiceLayout;
