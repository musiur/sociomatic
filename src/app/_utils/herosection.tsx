"use client";
import Image from "next/image";
import { ReactElement } from "react";

import { BrandCarousel } from "@/app/_utils/carousel";
import VideoPlayer from "@/app/_utils/video-player";
import GetConsultation from "@/components/molecule/get-consultation";
import GetAQuote from "@/components/molecule/get-a-quote";
import ANIM__FadeInOnScroll from "@/components/anims/fadein.anim";
import { AuroraBackground } from "@/components/ui/aurora-background";

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
  const backgroundImage = `bg-[url('/images/backgrounds/HeroBackground.svg')]`;
  return (
    <AuroraBackground>
      <section className={`${backgroundImage} bg-center bg-cover`}>
        <div className="container section grid grid-cols-1 lg:grid-cols-2 items-center large-gap">
          <ANIM__FadeInOnScroll className="order-2 lg:order-1 flex flex-col small-gap">
            <h1 className="text-primary [&>span]:text-secondary">{H1}</h1>
            <p className="hero-description">{P}</p>
            <div className="flex flex-wrap items-center small-gap">
              <GetConsultation />
              <GetAQuote />
            </div>
          </ANIM__FadeInOnScroll>
          <ANIM__FadeInOnScroll className="order-1 lg:order-2">
            {[
              <div key={1} className="min-h-[300px] shadow-2xl z-10 relative rounded-2xl">
                <iframe
                  className="w-full h-full min-h-[30vh] md:min-h-[60vh] lg:min-h-[40vh] rounded-2xl mx-auto border shadow-xl"
                  src="https://www.youtube.com/embed/eRxKwyhM59U?si=R66bAMX4xLgmqoCf"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>,
            ]}
          </ANIM__FadeInOnScroll>
        </div>
      </section>
    </AuroraBackground>
  );
};

export default HeroSection;
