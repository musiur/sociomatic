"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

export const BrandCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
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
    {
      id: 4,
      image: "mbc2.png",
      link: "https://www.mbc2.de/",
    },
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
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex small-gap justify-start">
        {BrandDetails.map((item: any) => {
          const { id, image, link } = item;
          return (
            <Link
              key={id}
              href={link}
              passHref={true}
              target="_blank"
              className="embla__slide flex-[0 0 100%] min-w-[150px] h-[60px] rounded-lg bg-white p-3 border border-secondarymuted cursor-pointer"
            >
              <Image
                src={`/images/brands/${image}`}
                alt="brandImage"
                width={1000}
                height={1000}
                className="h-full w-auto mx-auto"
              />
            </Link>
          );
        })}
        <div></div>
      </div>
    </div>
  );
};
