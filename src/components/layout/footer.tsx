import Link from "next/link";

import { Facebook, Instagram, Linkedin } from "lucide-react";
import BrandLogo from "../assets/brandlogo";

const Footer = () => {
  return (
    <footer className="bg-muted rounded-t-[3rem] ">
      <div className="section container">
        <section className="flex flex-col sm:flex-row flex-wrap items-start justify-between large-gap md:small-gap">
          <div className="order-4 md:order-first w-full md:w-auto">
            <div className="small-gap">
              <BrandLogo />
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
          </div>

          {HeadingLinks.map((item) => {
            return (
              <div
                key={item.id}
                className=" flex flex-col items-start flex-start small-gap md:flex-start"
              >
                <h4 className="font-bold text-secondary text-lg md:text-xl">
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
              </div>
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
        link: "/",
      },
      {
        id: 2,
        text: "Reviews",
        link: "/",
      },
      {
        id: 3,
        text: "About us",
        link: "/",
      },
      {
        id: 4,
        text: "Contact us",
        link: "/",
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
        link: "/",
      },
      {
        id: 1,
        text: "Social media paid advertise",
        link: "/",
      },
      {
        id: 2,
        text: "Software development",
        link: "/",
      },
      {
        id: 3,
        text: "Data analytics",
        link: "/",
      },
      {
        id: 4,
        text: "Shopify development",
        link: "/",
      },
      {
        id: 5,
        text: "Wordpress development",
        link: "/",
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
        link: "/",
      },
      {
        id: 1,
        text: "Terms and Conditions",
        link: "/",
      },
    ],
  },
];
