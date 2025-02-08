/* eslint-disable react-hooks/rules-of-hooks */

"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";


const Carousel = ({ images }: { images: any }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const maxSlides = images.length;
  const handleIncrease = () => {
    if (currentSlide < maxSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const handleDecrease = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  const slides = [];
  for (let i = 0; i < images.length; i++) {
    slides.push({
      id: i + 1,
      image: images[i],
    });
  }
  return (
    <div className="relative min-h-[200px] overflow-hidden">
      <div className="absolute top-[45%] left-0 w-full flex items-center justify-between p-1 z-10 opacity-0 group-hover:opacity-100 transition ease-in-out duration-300">
        <button
          onClick={handleDecrease}
          className="bg-white border rounded-full cursor-pointer"
        >
          <ChevronLeft className="stroke-[1.3px] stroke-gray-400" />
        </button>
        <button
          onClick={handleIncrease}
          className="bg-white border rounded-full cursor-pointer"
        >
          <ChevronRight className="stroke-[1.3px] stroke-gray-400" />
        </button>
      </div>
      <div
        className={`flex items-center transition ease-in-out duration-300`}
        style={{ transform: `translateX(-${currentSlide * 300}px)` }}
      >
        {slides.length
          ? slides.map((slide) => {
              return (
                <div
                  key={slide.id}
                  className={`min-w-[300px] max-w-[300px] min-h-[200px] max-h-[200px]`}
                >
                  <Image
                    src={slide.image}
                    alt="image"
                    width={1000}
                    height={1000}
                    className="w-full h-full"
                  />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Carousel;
