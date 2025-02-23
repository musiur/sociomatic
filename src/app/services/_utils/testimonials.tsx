"use client";

import ServicesCTA from "@/components/molecule/services-cta";
import Tagline from "@/components/molecule/tagline";
import { Sparkle } from "lucide-react";
import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import clsx from "clsx";
import MarqueeWrapper from "./marquee-wrapper";

const Testimonials = ({ data, hideCTA }: { data: any; hideCTA?: boolean }) => {
  const pathname = usePathname();
  const materedPath = pathname
    ?.replaceAll("/services/", "")
    ?.replaceAll("-", "");
  const path: any = {
    googleads: "googleads",
    googleanalytics: "googleanalytics",
    socialmediapaidads: "socialmediapaidads",
    softwaredevelopment: "software",
    shopifydevelopment: "shopify",
    customwebdevelopment: "customwebdev",
    uiux: "uiux",
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredData =
    data?.filter((item: any) => item.text?.length < 100) || [];

  return (
    <div className="py-16 bg-muted">
      <ANIM__FadeInOutOnScroll>
        <div className="container flex flex-col items-center justify-center gap-[32px]">
          <Tagline text={<>Testimonials</>} />
          <h2 className="h2 text-primary text-center">
            Checkout What Our
            <br />
            <span className="text-secondary relative">Customers</span>
            &nbsp;Have To Say
          </h2>
        </div>
      </ANIM__FadeInOutOnScroll>
      <div className="space-y-8">
        <div className="relative container">
          {isClient && (
            <MarqueeWrapper
              className="gap-4 w-full"
              itemWidth={300}
              gapWidth={16}
            >
              {filteredData?.slice(0, 10)?.map((item: any, index: number) => {
                return (
                  <TestimonialCard
                    key={index}
                    details={item}
                    className="flex-shrink-0"
                  />
                );
              })}
            </MarqueeWrapper>
          )}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-muted dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-muted dark:from-background"></div>
        </div>
        {!hideCTA ? (
          <div className="flex justify-center px-4">
            <ServicesCTA
              position="center"
              cta={{
                primary: {
                  text: <>Get Started Right Away</>,
                  link: `/joining?type=${path[materedPath]}`,
                },
                secondary: { text: <>Get A Free Consultation</>, link: "/" },
              }}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export const TestimonialCard = ({
  details,
  className = "",
}: {
  details: any;
  className?: string;
}) => {
  const {
    _id,
    name,
    rating,
    category,
    text,
    avatar,
    company,
    country,
    image,
    date,
  } = details;
  const createArray = (n: number): number[] => {
    return Array.from({ length: n }, (_, i) => i + 1);
  };
  const [moreText, setMoreText] = useState(false);

  const letterCount = 100;
  return (
    <div
      className={`w-[300px] shrink-0 mx-2 hover:shadow-lg p-4 rounded-2xl space-y-[16px] border-2 border-white hover:border-secondary hover:scale-105 bg-white transition ease-in-out duration-500 ${className}`}
    >
      <div className="flex">
        {createArray(rating || 1).map((item: number) => {
          return (
            <Sparkle
              key={item}
              className="rotate-45 text-secondary fill-secondary/40"
            />
          );
        })}
      </div>
      <p
        className={clsx(
          "text-sm leading-relaxed",
          moreText ? "h-auto" : "line-clamp-4"
        )}
      >
        <i>{`"${text}"`}</i>
        {text?.length > letterCount && (
          <span
            role="button"
            onClick={() => setMoreText(!moreText)}
            className="text-secondary text-xs ml-1"
          >
            {moreText ? "See less" : "See more"}
          </span>
        )}
      </p>
      <div className="flex items-center gap-4">
        <Image
          src={avatar || ""}
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 rounded-full bg-gray-200 object-cover"
        />
        <div>
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-gray-400 text-xs">{country}</p>
        </div>
      </div>
      {image && (
        <Image
          src={image}
          alt=""
          width={300}
          height={200}
          className="w-full h-auto rounded-md bg-gray-200 object-cover"
        />
      )}
    </div>
  );
};

export default Testimonials;
