import Link from "next/link";

import { Facebook, Instagram, Linkedin } from "lucide-react";
import BrandLogo from "../assets/brandlogo";
import ANIM__FadeInOutOnScroll from "../anims/fadein.anim";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary via-primary to-secondary [&>*]:text-white">
      <div className="h-2 bg-gradient-to-r from-secondary/5 via-secondary to-secondary/5"></div>
      <div className="section container">
        <section className="flex flex-col sm:flex-row flex-wrap items-start justify-between large-gap md:small-gap">
          <ANIM__FadeInOutOnScroll className="order-4 md:order-first w-full md:w-auto">
            <div className="small-gap">
              <BrandLogo dark={true} />
            </div>
            <p className="py-[25px]">
              Business Center 1, M Floor, Nad Al Sheba, Dubai, U.A.E
            </p>
            <div className="text-icon py-[25px]">
              <p className="pb-[25px]">Get Updated with Us Regularly</p>
              <div className="icons flex flex-row small-gap">
                <Link
                  href="https://www.facebook.com/thesociomatic"
                  passHref={true}
                  target="_blank"
                >
                  <Facebook className=" cursor-pointer stroke-[1.3px] hover:stroke-secondary" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/thesociomatic/"
                  passHref={true}
                  target="_blank"
                >
                  <Linkedin className=" cursor-pointer stroke-[1.3px] hover:stroke-secondary" />
                </Link>
                <Link
                  href="https://www.instagram.com/thesociomatic"
                  passHref={true}
                  target="_blank"
                >
                  <Instagram className=" cursor-pointer stroke-[1.3px] hover:stroke-secondary" />
                </Link>
              </div>
            </div>
            <p className="pt-[25px]">
              © {new Date().getFullYear()}. All rights reserved
            </p>
          </ANIM__FadeInOutOnScroll>

          {HeadingLinks.map((item) => {
            return (
              <ANIM__FadeInOutOnScroll
                key={item.id}
                className=" flex flex-col items-start flex-start small-gap md:flex-start"
              >
                <h4 className="font-medium text-white text-lg md:text-xl">
                  {item.title}
                </h4>
                {item.links.map((link) => {
                  return (
                    <Link
                      key={link.id}
                      href={link.link}
                      className="hover:text-secondary"
                    >
                      {link.text}
                    </Link>
                  );
                })}
              </ANIM__FadeInOutOnScroll>
            );
          })}
        </section>
      </div>
    </footer>
  );
};

export default Footer;

const HeadingLinks = [
  {
    id: 0,
    title: "Company",
    links: [
      {
        id: 0,
        text: "Home",
        link: "/",
      },
      {
        id: 1,
        text: "Services",
        link: "/services",
      },
      {
        id: 2,
        text: "Reviews",
        link: "/reviews",
      },
      {
        id: 3,
        text: "About us",
        link: "/about-us",
      },
      {
        id: 4,
        text: "Contact us",
        link: "/contact-us",
      },
    ],
  },
  {
    id: 1,
    title: "Services",
    links: [
      {
        id: 0,
        text: "Google paid advertise",
        link: "/services/google-paid-ads",
      },
      {
        id: 1,
        text: "Social media paid advertise",
        link: "/services/social-media-paid-ads",
      },
      {
        id: 2,
        text: "Software development",
        link: "/services/software-development",
      },
      {
        id: 3,
        text: "Data analytics",
        link: "/services/data-analytics",
      },
      {
        id: 4,
        text: "Shopify Store development",
        link: "/services/shopify-store-development",
      },
      {
        id: 5,
        text: "Wordpress development",
        link: "/services/wordpress-development",
      },
      {
        id: 6,
        text: "UI/UX & Graphic design",
        link: "/services/ui-ux-and-graphic-design",
      },
      {
        id: 7,
        text: "Content development & SEO",
        link: "/services/content-writing-and-seo",
      },
    ],
  },

  {
    id: 2,
    title: "Our Policy",
    links: [
      {
        id: 0,
        text: "Privacy Policy",
        link: "/privacy-policy",
      },
      {
        id: 1,
        text: "Terms and Conditions",
        link: "/terms-and-conditions",
      },
    ],
  },
];
