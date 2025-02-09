import FadeInOnScroll from "@/components/anims/fadein-onscroll";
import { Send, Star } from "lucide-react";
import Image from "next/image";
import Characteristics from "./characteristics";
import Skills from "./skills";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  return (
    <section className="section container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="flex flex-col gap-10">
        <div className="flex flex-wrap gap-10">
          <Image
            src="/images/yeatiq.png"
            alt="yeatiqs-image"
            height={1000}
            width={1000}
            className="w-[150px] h-[160px] rounded-md"
          />
          <div className="flex flex-col items-start justify-start gap-2">
            <h2 className="font-bold text-2xl">
              Yeatiq&nbsp;
              <span className="font-semibold text-gray-400 text-lg">
                @Yeatiq
              </span>
            </h2>
            <div className="flex items-center gap-[5px]">
              <Star className="stroke-[1.3px] fill-black w-4 h-4" />
              5.0 (<span className="underline">474</span>)
            </div>
            <div className="flex items-center justify-start gap-2">
              <Star className="w-4 h-4 stroke-[1.3px]" /> Top Rated
            </div>
          </div>
        </div>
        <FadeInOnScroll>
          <div className="max-w-[600px]">
            <h3 className="text-lg font-bold pb-3">About</h3>
            <p>
              Hello, I am a digital marketing professional with over two years
              of experience. I have worked for ad agencies as a Digital
              Marketer, responsible for setting up and executing ad campaigns. I
              earned a LinkedIn assessment badge on google analytics. I&apos;m
              in the top 30% of 492k people who took this assessment. I look
              forward to working with you.
            </p>
          </div>
        </FadeInOnScroll>
        <div className="block md:hidden">
          <Characteristics />
        </div>
        <Skills />
      </div>
      <div className="flex flex-col gap-10">
        <div className="hidden md:block">
          <Characteristics />
        </div>
        <div className="w-[300px] p-5 rounded-md border flex flex-col gap-2">
          <h3>
            <span className="font-bold">Know more</span> about Yeatiqur Rahman
          </h3>
          <Link
            href="https://thesociomatic.com"
            passHref={true}
            target="_blank"
          >
            <Button className="w-full gap-2">
              <Send className="w-4 h-4" />
              Visit Fiverr Profile
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
