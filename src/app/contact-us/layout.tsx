import { ReactElement } from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Sociomatic | Get in Touch",
  description:
    "Reach out to Sociomatic for inquiries, collaborations, or consultations. Our team is ready to assist you in achieving digital excellence.",
};

const ContactUsLayout = ({ children }: { children: ReactElement }) => {
  return children
};

export default ContactUsLayout;
