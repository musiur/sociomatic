/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { CaretSortIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import BrandLogo from "../assets/brandlogo";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import GetAQuote from "../molecule/get-a-quote";
import { useEffect, useState } from "react";
import clsx from "clsx";
import ShimmerButton from "../magicui/shimmer-button";

const Navbar = () => {
  const pathname = usePathname();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  useEffect(() => {
    openMobileMenu && setOpenMobileMenu(false);
  }, [pathname]);
  return (
    <nav id="topPoint" className="sticky top-0 z-50">
      <div className="backdrop-blur-xl bg-white/70 border-b border-gray-200 ">
        <div className="container py-3 flex items-center justify-between">
          <Link href="/">
            <BrandLogo />
          </Link>
          <div className="hidden lg:flex items-center justify-end small-gap">
            <NavigationMenu>
              <NavigationMenuList>
                {Links.map((item: any) => {
                  return (
                    <div key={item.id}>
                      {item.children ? (
                        <NavigationMenuItem>
                          <NavigationMenuTrigger
                            className={`${
                              pathname.includes(item.link)
                                ? "text-secondary font-semibold"
                                : "text-primary"
                            }`}
                          >
                            {item.text}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent className="grid grid-cols-2 items-start justify-start small-gap p-[25px] min-w-[500px]">
                            {item.children.map((child: any) => {
                              return (
                                <a
                                  key={child.id}
                                  href={child.link}
                                  className={`text-primary hover:text-secondary [&>*]:text-xs ${
                                    pathname === child.link
                                      ? "text-secondary font-semibold"
                                      : "text-primary"
                                  }`}
                                >
                                  {child.text}
                                </a>
                              );
                            })}
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      ) : (
                        <NavigationMenuItem>
                          <Link
                            href={item.link}
                            legacyBehavior
                            passHref
                            className={`${
                              pathname === "/"
                                ? "text-secondary font-semibold"
                                : pathname.includes(item.link)
                                ? "text-secondary font-semibold"
                                : "text-primary"
                            }`}
                          >
                            <NavigationMenuLink
                              className={navigationMenuTriggerStyle()}
                            >
                              <span
                                className={`hover:text-secondary ${
                                  pathname === item.link
                                    ? "text-secondary font-semibold"
                                    : "text-primary"
                                }`}
                              >
                                {item.text}
                              </span>
                            </NavigationMenuLink>
                          </Link>
                        </NavigationMenuItem>
                      )}
                    </div>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
            <GetAQuote />
          </div>

          <div className="block lg:hidden">
            <div>
              <Menu role="button" onClick={() => setOpenMobileMenu(true)} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "fixed top-0 right-0 bg-black/60  w-[100vw] overflow-hidden transition-opacity ease-in-out duration-500",
          {
            "opacity-100 z-50  delay-0": openMobileMenu,
            "opacity-0 -z-50  delay-150": !openMobileMenu,
          }
        )}
        role="button"
        onClick={() => setOpenMobileMenu(false)}
      >
        <div
          className={clsx(
            "bg-white px-[16px] py-[32px] h-[100dvh] shadow-2xl ml-auto max-w-[300px] min-w-[280px] transition ease-in-out duration-300",
            {
              "block delay-150": openMobileMenu,
              "hidden delay-150": !openMobileMenu,
            }
          )}
        >
          <div className="flex items-center justify-between gap-[10px] pb-[50px]">
            <BrandLogo />
            <X
              className="stroke-[1.3px] stroke-gray-500"
              role="button"
              onClick={() => setOpenMobileMenu(false)}
            />
          </div>
          <div className="max-h-[80vh] overflow-auto">
            <ul className="flex flex-col items-start justify-start small-gap">
              {Links.map((linkItem: any) => {
                return (
                  <li key={linkItem.id}>
                    {linkItem.children ? (
                      <Collapsible
                        onClick={(event: any) => event.stopPropagation()}
                      >
                        <CollapsibleTrigger
                          className={`flex items-center justify-start small-gap ${
                            pathname.includes(linkItem.link)
                              ? "text-secondary font-semibold"
                              : "text-primary"
                          }`}
                        >
                          {linkItem.text}
                          <CaretSortIcon className="h-4 w-4" />
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="flex flex-col items-start justify-start small-gap py-[25px] px-3 border-l">
                            {linkItem.children.map((child: any) => {
                              return (
                                <Link
                                  key={child.id}
                                  href={child.link}
                                  className={
                                    pathname === child.link
                                      ? "text-secondary font-semibold"
                                      : "text-primary"
                                  }
                                >
                                  {child.text}
                                </Link>
                              );
                            })}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    ) : (
                      <Link
                        href={linkItem.link}
                        className={
                          pathname === linkItem.link
                            ? "text-secondary font-semibold"
                            : "text-primary"
                        }
                      >
                        {linkItem.text}
                      </Link>
                    )}
                  </li>
                );
              })}
              <Link href="/get-a-quote">
                <ShimmerButton>Gat a Quote</ShimmerButton>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const Links = [
  {
    id: 1,
    text: "Home",
    link: "/",
  },
  {
    id: 2,
    text: "Case Studies",
    link: "/case-studies",
    children: [
      {
        id: 1,
        text: "Google Paid Ads",
        link: "/case-studies/google-paid-ads",
      },
      {
        id: 2,
        text: "Social Media Paid Ads",
        link: "/case-studies/social-media-paid-ads",
      },
      {
        id: 3,
        text: "Data Analytics",
        link: "/case-studies/data-analytics",
      },
      {
        id: 4,
        text: "Software Development",
        link: "/case-studies/software-development",
      },
      {
        id: 5,
        text: "Web Development",
        link: "/case-studies/custom-web-development",
      },
      {
        id: 6,
        text: "Shopify Development",
        link: "/case-studies/shopify-store-development",
      },
      {
        id: 7,
        text: "Wordpress Development",
        link: "/case-studies/wordpress-development",
      },
      {
        id: 8,
        text: "UI/UX & Graphic Design",
        link: "/case-studies/ui-ux-and-graphic-design",
      },
    ],
  },
  {
    id: 3,
    text: "Services",
    link: "/services",
    children: [
      {
        id: 1,
        text: "Google Paid Ads",
        link: "/services/google-ads",
      },
      {
        id: 2,
        text: "Social Media Paid Ads",
        link: "/services/social-media-paid-ads",
      },
      {
        id: 3,
        text: "Google Analytics",
        link: "/services/google-analytics",
      },
      {
        id: 4,
        text: "Software Development",
        link: "/services/software-development",
      },
      {
        id: 5,
        text: "Web Development",
        link: "/services/custom-web-development",
      },
      {
        id: 6,
        text: "Shopify Development",
        link: "/services/shopify-development",
      },
      {
        id: 7,
        text: "Wordpress Development",
        link: "/services/wordpress-development",
      },
      {
        id: 8,
        text: "UI/UX & Graphic Design",
        link: "/services/uiux",
      },
      // {
      //   id: 10,
      //   text: "All Services",
      //   link: "/services",
      // },
    ],
  },
  {
    id: 4,
    text: "Reviews",
    link: "/reviews",
  },
  {
    id: 5,
    text: "About us",
    link: "/about-us",
  },
  {
    id: 6,
    text: "Contact us",
    link: "/contact-us",
  },
];
