"use client";
import { ReactElement, ReactNode } from "react";
import ANIM__FadeInOnScroll from "@/components/anims/fadein.anim";
import { AuroraBackground } from "@/components/ui/aurora-background";
import HeroCTA from "./hero-cta";

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
  cta = <HeroCTA />,
}: {
  H1: ReactElement;
  P: ReactElement;
  videoLink: string;
  cta?: ReactNode;
}) => {
  const backgroundImage = `bg-[url('/images/backgrounds/HeroBackground.svg')]`;
  return (
    <AuroraBackground>
      <section className={`${backgroundImage} bg-center bg-cover`}>
        <div className="container section grid grid-cols-1 lg:grid-cols-2 items-center large-gap">
          <ANIM__FadeInOnScroll className="order-2 lg:order-1 flex flex-col small-gap">
            <h1 className="text-primary [&>span]:text-secondary">{H1}</h1>
            <p className="hero-description">{P}</p>
            {cta ? (
              <div className="flex flex-wrap items-center small-gap">{cta}</div>
            ) : null}
          </ANIM__FadeInOnScroll>
          <ANIM__FadeInOnScroll className="order-1 lg:order-2">
            {[
              <div
                key={1}
              >
                <iframe
                  className="aspect-video w-full h-full rounded-2xl mx-auto border shadow-xl shadow-2xl"
                  src={videoLink}
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
