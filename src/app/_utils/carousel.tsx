"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import ANIM__FadeInOnScroll from "@/components/anims/fadein.anim";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const BrandCarousel = () => {
  const BrandDetails = [
    {
      id: 1,
      image: "panasonic.png",
      link: "https://panasonic.com.au/?utm_source=google&utm_medium=organic",
    },
    {
      id: 2,
      image: "oldnavy.png",
      link: "https://www.oldnavy.cl/?utm_source=google&utm_medium=organic",
    },
    {
      id: 3,
      image: "grovebedding.png",
      link: "https://grovebedding.com/?utm_source=google&utm_medium=organic",
    },
    // {
    //   id: 4,
    //   image: "mbc2.png",
    //   link: "https://www.mbc2.de/",
    // },
    {
      id: 5,
      image: "k9cakery.png",
      link: "https://www.k9cakery.com/?utm_source=google&utm_medium=organic",
    },
    {
      id: 6,
      image: "teamgeeky.png",
      link: "https://teamgeeky.com/?utm_source=google&utm_medium=organic",
    },
  ];

  return (
    <div className="bg-muted rounded-b-[20px] md:rounded-b-[40px]">
      <div className="py-10 container">
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <ANIM__FadeInOnScroll>
            <CarouselContent className="-ml-1">
              {BrandDetails.map((_) => (
                <CarouselItem
                  key={_.id}
                  className="p-1 basis-1/2 md:basis-1/3 lg:basis-1/5 "
                >
                  <div className="p-4 flex items-center justify-center border rounded-lg bg-white h-[80px]">
                    <Image
                      src={"/images/brands/" + _.image}
                      alt=""
                      width={500}
                      height={200}
                      className="w-auto max-h-[40px]"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </ANIM__FadeInOnScroll>
        </Carousel>
      </div>
    </div>
  );
};
