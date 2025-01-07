import { FastForwardIcon, RocketIcon } from "lucide-react";
import Image from "next/image";

const LandingAboutSection = () => {
  return (
    <div className="bg-muted section">
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="space-y-4">
          <h2>Why Work with Yeatiq?</h2>
          <p>
            I&apos;m Yeatiq, the founder of Sociomatic, a Dubai-licensed LLC.
            Over the past decade,{" "}
            <span className="font-semibold">
              I&apos;ve helped 700+ businesses achieve remarkable growth,
              including turning startups into million-dollar brands.
            </span>
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl flex flex-col items-start justify-center gap-4 ">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/10 text-secondary">
            <FastForwardIcon className="w-6 h-6" />
          </div>
          <p className="text-md md:text-lg">
            My mission is simple: to listen, understand your challenges
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl flex flex-col items-start justify-center gap-4 text-md md:text-lg">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/10 text-secondary">
            <RocketIcon className="w-6 h-6" />
          </div>
          <p className="text-md md:text-lg">
            create a personalized strategy that guarantees success.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default LandingAboutSection;
