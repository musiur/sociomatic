"use client";

import VideoPlayButton from "@/components/assets/video-play-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const HeroSection = () => {
  return (
    <section className="bg-[url('/images/backgrounds/HeroBackground.svg')] bg-center bg-cover ">
      <div className="container section grid grid-cols-1 md:grid-cols-2 items-center large-gap">
        <div className="order-2 md:order-1 flex flex-col small-gap">
          <h1 className="text-primary">
            We Craft <span className="text-secondary">Solution</span> on Demand
            to Go Online and Grow Business{" "}
          </h1>
          <p className="hero-description">
            Being digital <span>agency</span>, the sociomatic{" "}
            <span>specialized with A to Z</span> to help improving business{" "}
            <span>analytics</span>, software <span>development</span>,{" "}
            <span>campaigns</span>, and extensive <span>maintenance</span>
          </p>
          <div className="flex flex-wrap items-center small-gap">
            <Button variant="outline">Get a Free Consultation</Button>
            <Button>Get a Quote</Button>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="min-h-[200px] relative">
            <Image
              src="/images/pages/home/heroVideo.png"
              alt=""
              width={1000}
              height={1000}
              className="w-full h-full"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <Dialog>
                <DialogTrigger>
                  <VideoPlayButton className="cursor-pointer" />
                </DialogTrigger>
                <DialogContent>
                  <iframe
                    className="w-full h-[90vh] rounded-[20px] lg:rounded-[40px]"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY"
                  ></iframe>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-muted rounded-b-[20px] md:rounded-b-[40px]">
        <div className="py-[63px] container">
          <EmblaCarousel />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex small-gap justify-start">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item: number) => {
          return (
            <div
              key={item}
              className="embla__slide flex-[0 0 100%] min-w-[150px] h-[60px] rounded-lg bg-white p-3 border border-secondarymuted cursor-grab"
            >
              <div className="bg-[url('/images/pages/home/brands/image1.png')] bg-contain bg-center h-full w-full bg-no-repeat"></div>
            </div>
          );
        })}
        <div></div>
      </div>
    </div>
  );
};
