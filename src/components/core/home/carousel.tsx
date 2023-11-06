"use client"

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

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