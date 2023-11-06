import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ReactElement } from "react";

import { EmblaCarousel } from "@/components/core/home/carousel";
import VideoPlayer from "@/components/core/home/video-player";
import Link from "next/link";

const HeroSection = ({
  H1 = (
    <h1 className="text-primary">
      We Craft <span className="text-secondary">Solution</span> on Demand to Go
      Online and Grow Business
    </h1>
  ),
  P = (
    <p className="hero-description">
      Being digital <span>agency</span>, the sociomatic
      <span>specialized with A to Z</span> to help improving business
      <span>analytics</span>, software <span>development</span>,
      <span>campaigns</span>, and extensive <span>maintenance</span>
    </p>
  ),
  videoLink = "https://www.youtube.com/embed/Gl465-ugqbM?si=Njv8OZykPsz9LsYZ",
  brands = false,
}: {
  H1: ReactElement;
  P: ReactElement;
  videoLink: string;
  brands: boolean;
}) => {
  return (
    <section className="bg-[url('/images/backgrounds/HeroBackground.svg')] bg-center bg-cover">
      <div className="container section grid grid-cols-1 md:grid-cols-2 items-center large-gap">
        <div className="order-2 md:order-1 flex flex-col small-gap">
          {H1}
          {P}
          <div className="flex flex-wrap items-center small-gap">
            <Link href="/#calendly">
              <Button variant="outline">Get a Free Consultation</Button>
            </Link>
            <Link href="/contact-us">
              <Button>Get a Quote</Button>
            </Link>
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
              <VideoPlayer videoLink={videoLink} />
            </div>
          </div>
        </div>
      </div>
      {brands ? (
        <div className="bg-muted rounded-b-[20px] md:rounded-b-[40px]">
          <div className="py-[63px] container">
            <EmblaCarousel />
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default HeroSection;
