// import Head from "next/head";
import { ReactElement } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sociomatic | Trusted Digital Partner",
  description:
    "Learn about Sociomatic - your trusted digital partner. Discover our journey, expertise, and commitment to delivering innovative solutions for businesses globally.",
};

const AboutUsLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default AboutUsLayout;
