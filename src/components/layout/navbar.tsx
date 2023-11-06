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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CaretSortIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import BrandLogo from "../assets/brandlogo";

import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="backdrop-blur-xl bg-white/70 border-b border-muted sticky top-0 z-50">
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
                          className={`${pathname.includes(item.link)
                            ? "text-secondary font-semibold"
                            : "text-primary"
                            }`}
                        >
                          {item.text}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="grid grid-cols-2 items-start justify-start small-gap p-[25px] min-w-[500px]">
                          {item.children.map((child: any) => {
                            return (
                              <NavigationMenuLink key={child.id}>
                                <a
                                  href={child.link}
                                  className={`text-primary hover:text-secondary ${pathname === child.link
                                    ? "text-secondary font-semibold"
                                    : "text-primary"
                                    }`}
                                >
                                  {child.text}
                                </a>
                              </NavigationMenuLink>
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
                          className={`${pathname === "/"
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
                              className={`hover:text-secondary ${pathname === item.link
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
          <Button>Get a Quote</Button>
        </div>

        <div className="block lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <BrandLogo />
                <SheetDescription className="max-h-[90vh] overflow-auto">
                  <ul className="flex flex-col items-start justify-start small-gap pt-[50px]">
                    {Links.map((linkItem: any) => {
                      return (
                        <li key={linkItem.id}>
                          {linkItem.children ? (
                            <Collapsible>
                              <CollapsibleTrigger
                                className={`flex items-center justify-start small-gap ${pathname.includes(linkItem.link)
                                  ? "text-secondary font-semibold"
                                  : "text-primary"
                                  }`}
                              >
                                {linkItem.text}{" "}
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
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
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
        text: "Custom Web Development",
        link: "/case-studies/custom-web-development",
      },
      {
        id: 6,
        text: "Shopify Development",
        link: "/case-studies/shopify-development",
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
      {
        id: 9,
        text: "Content Writing & SEO",
        link: "/case-studies/content-writing-and-seo",
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
        link: "/services/google-paid-ads",
      },
      {
        id: 2,
        text: "Social Media Paid Ads",
        link: "/services/social-media-paid-ads",
      },
      {
        id: 3,
        text: "Data Analytics",
        link: "/services/data-analytics",
      },
      {
        id: 4,
        text: "Software Development",
        link: "/services/software-development",
      },
      {
        id: 5,
        text: "Custom Web Development",
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
        link: "/services/ui-ux-and-graphic-design",
      },
      {
        id: 9,
        text: "Content Writing & SEO",
        link: "/services/content-writing-and-seo",
      },
    ],
  },
  {
    id: 4,
    text: "About us",
    link: "/about-us",
  },
  {
    id: 5,
    text: "Contact us",
    link: "/contact-us",
  }
];
