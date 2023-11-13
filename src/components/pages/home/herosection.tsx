import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ReactElement } from "react";

import { EmblaCarousel } from "@/components/core/home/carousel";
import VideoPlayer from "@/components/core/home/video-player";
import Link from "next/link";

const HeroSection = ({
  H1 = (
    <>
      We Craft <span>Solution</span> on Demand to Go Online and Grow Business
    </>
  ),
  P = (
    <>
      Being digital <span>agency</span>, the sociomatic&nbsp;
      <span>specialized with A to Z</span> to help improving business&nbsp;
      <span>analytics</span>, software <span>development</span>,&nbsp;
      <span>campaigns</span>, and extensive <span>maintenance</span>
    </>
  ),
  videoLink = "https://www.youtube.com/embed/Gl465-ugqbM?si=Njv8OZykPsz9LsYZ",
  brands = false,
  background = "HeroBackgroundServices",
}: {
  H1: ReactElement;
  P: ReactElement;
  videoLink: string;
  brands: boolean;
  background: string;
}) => {
  // ${background}
  return (
    <section
      className={`bg-[url('/images/backgrounds/${background}.svg')] bg-center bg-cover`}
    >
      <div className="container section grid grid-cols-1 lg:grid-cols-2 items-center large-gap">
        <div className="order-2 lg:order-1 flex flex-col small-gap">
          <h1 className="text-primary [&>span]:text-secondary">{H1}</h1>
          <p className="hero-description">{P}</p>
          <div className="flex flex-wrap items-center small-gap">
            <Link href="/#calendly">
              <Button variant="outline">Get a Free Consultation</Button>
            </Link>
            <Link href="/contact-us">
              <Button>Get a Quote</Button>
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2">
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
