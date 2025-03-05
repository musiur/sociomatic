/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { cn } from "@/lib/utils";
import { Sparkle } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Type__TestimonialCard = {
  _id: string;
  name: string;
  rating: number;
  category: string;
  text: string;
  avatar: string;
  company: string;
  country: string;
  image: string;
  date: string;
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: Type__TestimonialCard[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
      if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn("scroller relative overflow-hidden", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused] active:[animation-play-state:paused]"
        )}
      >
        {items.map((item: Type__TestimonialCard) => {
          return (
            <li
              className="relative max-w-[400px] rounded-2xl border px-8 py-6 bg-white w-[400px] flex flex-col"
              key={item._id}
            >
              <blockquote className="flex flex-col h-full">
                <div
                  aria-hidden="true"
                  className="absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <div className="flex mb-4">
                  {Array.from({ length: item.rating || 1 }, (_, index) => (
                    <Sparkle key={index} className="rotate-45 text-secondary fill-secondary/40" />
                  ))}
                </div>
                <p className="relative text-sm leading-[1.6] font-normal mb-4 line-clamp-3">
                  {item.text}
                </p>
                <div className="relative mt-auto flex items-center">
                  <Image
                    src={item.avatar || ""}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full bg-gray-200 mr-4"
                  />
                  <span className="flex flex-col gap-1">
                    <span className="text-sm leading-[1.6] font-semibold">
                      {item.name}
                    </span>
                    <span className="text-sm leading-[1.6] text-gray-400">
                      {item.company}, {item.country}
                    </span>
                  </span>
                </div>
                {item.image && (
                  <Image
                    src={item.image}
                    alt=""
                    width={200}
                    height={200}
                    className="rounded-md w-full h-auto"
                  />
                )}
              </blockquote>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
