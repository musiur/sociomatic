"use client";

import { Building, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import ContactForm from "./contact-form";


const ContactUs = () => {
  const ContactInfo = [
    {
      id: 0,
      icon: <Phone />,
      title: "Make a Call",
      info: "+971507477541",
    },
    {
      id: 1,
      icon: <Building />,
      title: "Main Office",
      info: "Business Center 1, M Floor, Nad Al Sheba, Dubai, U.A.E",
    },
    {
      id: 2,
      icon: <MessageCircle />,
      title: "WhatsApp",
      info: "+971507477541",
    },
  ];
  return (
    <div className="bg-[url('/images/backgrounds/StarBackground.svg')] bg-cover bg-center">
      <ANIM__FadeInOutOnScroll className="container section grid grid-cols-1 md:grid-cols-2 small-gap">
        <ANIM__FadeInOutOnScroll className="flex flex-col bg-primary rounded-xl p-[25px] lg:p-[50px] large-gap">
          <div className="flex flex-col small-gap">
            <h1 className="text-white">Contact Us</h1>
            <p className="text-secondarymuted">
              Feel free to reach out to us via email or WhatsApp at any time! We
              aim to respond to all inquiries within 24 hours on business days.
              We&apos;re delighted to address any questions you may have.
            </p>
          </div>
          {ContactInfo.map((item: any) => {
            return (
              <ANIM__FadeInOutOnScroll
                key={item.id}
                className="grid grid-cols-1 gap-[10px]"
              >
                <div className="[&>svg]:stroke-white">{item.icon}</div>
                <h3 className="text-[16px] lg:text-[20px] font-medium text-white">
                  {item.title}
                </h3>
                {item.id === 2 || item.id === 0 ? (
                  <Link href={`tel:${item.info}`} className="text-white">
                    {item.info}
                  </Link>
                ) : (
                  <p className="text-white">{item.info}</p>
                )}
              </ANIM__FadeInOutOnScroll>
            );
          })}
        </ANIM__FadeInOutOnScroll>
        <ContactForm />
      </ANIM__FadeInOutOnScroll>
    </div>
  );
};

export default ContactUs;
