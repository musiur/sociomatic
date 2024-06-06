import { ReactElement } from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Sociomatic Success Stories",
  description:
    "Explore The Sociomatic's success stories through our case studies. Discover how our tailored solutions have driven measurable business results across various industries.",
};

const CaseStudyLayout = ({ children }: { children: ReactElement }) => {
  return <div>{children}</div>;
};

export default CaseStudyLayout;
