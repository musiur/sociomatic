"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules";
import ServicesCTA from "@/components/molecule/services-cta";
import Tagline from "@/components/molecule/tagline";
import { Sparkle } from "lucide-react";
import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";

const Testimonials = ({ data }: { data: any }) => {
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
      <div className="py-[48px] container">
        <div className="space-y-8">
          <div className="relative">
            <ANIM__FadeInOutOnScroll>
              <Swiper
                spaceBetween={0}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                modules={[
                  Pagination,
                  Navigation,
                  Mousewheel,
                  Keyboard,
                  Autoplay,
                ]}
              >
                {data?.length
                  ? data?.map((item: any) => {
                      return (
                        <SwiperSlide key={item._id} className="pt-4 pb-16 px-4">
                          <TestimonialCard details={item} />
                        </SwiperSlide>
                      );
                    })
                  : null}
              </Swiper>
            </ANIM__FadeInOutOnScroll>
          </div>
          <div className="flex justify-center">
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
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

export const TestimonialCard = ({
  details,
}: {
  details: {
    _id: number;
    name: string;
    rating?: number;
    category: string;
    text: string;
    avatar: string;
    company: string;
    country: string;
    image?: string;
    date?: string;
  };
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
    <div className="inline-block min-w-[300px] shadow-lg p-4 rounded-2xl space-y-[16px] border-2 border-white hover:border-secondary hover:scale-105 bg-white transition ease-in-out duration-500 hover:shadow-2xl">
      <div className="flex">
        {createArray(rating || 1).map((item: number) => {
          return <Sparkle key={item} className="rotate-45 text-secondary" />;
        })}
      </div>
      <p
        className={clsx("space-y-2 space-x-2 min-h-[120px]", {
          "max-h-[160px] overflow-hidden": !moreText,
          "h-auto": moreText,
        })}
      >
        <i>{`"${
          text?.length > letterCount
            ? moreText
              ? text
              : text?.slice(0, letterCount) + "..."
            : text
        }"`}</i>
        {text?.length > letterCount ? (
          <span
            role="button"
            onClick={() => setMoreText(!moreText)}
            className="text-secondary text-xs"
          >
            {moreText ? "See less" : "See more"}
          </span>
        ) : null}
      </p>
      <div className="flex items-center gap-4">
        <Image
          src={avatar || ""}
          alt=""
          width={300}
          height={300}
          className="h-10 w-10 rounded-full bg-gray-200"
        />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-gray-400 text-sm">{country}</p>
        </div>
      </div>
      <Image
        src={image || ""}
        alt=""
        width={300}
        height={300}
        className="w-full h-auto rounded-md bg-gray-200"
      />
    </div>
  );
};
