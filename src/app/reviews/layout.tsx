import { ReactElement } from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials | Sociomatic",
  description:
    "Read what our clients say about The Sociomatic. Explore testimonials showcasing our commitment to delivering exceptional digital solutions and achieving client satisfaction.",
};

const ReviewsLayout = ({ children }: { children: ReactElement }) => {
  return <div>{children}</div>;
};

export default ReviewsLayout;
