import ANIM__FadeInOutOnScroll from "@/components/anims/fadein.anim";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";

const HeroSection = () => {
  return (
    <AuroraBackground>
      <section className="container section flex flex-col md:flex-row items-center gap-8">
        <ANIM__FadeInOutOnScroll>
          <Image
            src="/images/yeatiq.png"
            alt="CEO"
            width={1000}
            height={1000}
            className="rounded-full border-4 border-gray-200 object-cover w-[200px] h-[200px]"
          />
        </ANIM__FadeInOutOnScroll>

        <ANIM__FadeInOutOnScroll className="flex-1">
          <h1 className="text-3xl font-bold">Yeatiq</h1>
          <div className="flex items-center gap-4 mt-2 text-gray-600">
            <span>🇧🇩 Bangladesh</span>
            <span>•</span>
            <span>Speaks English</span>
          </div>
          <div className="mt-2">
            <span className="inline-block bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">
              Top Rated ★★★★★
            </span>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-1">
              Social Media Marketing Specialist: Performance Driven Digital
              Marketer
            </h2>
            <p className="text-gray-700">
              Hello! I&apos;m a digital marketing expert with 4+ years of experience
              in Google Ads, Meta Ads, and Google Analytics 4. I&apos;ve managed
              700+ campaigns for eCommerce and service-based clients, scaling
              revenue with data-driven strategies. I specialize in tracking and
              ad performance using Google Tag Manager, Facebook Pixel, Google
              Ads Conversion Tracking, and TikTok Pixel. My Google Analytics 4
              expertise earned me a LinkedIn badge, ranking in the top 30% of
              492k professionals. I deliver measurable results and look forward
              to collaborating with you!
            </p>
          </div>
        </ANIM__FadeInOutOnScroll>
      </section>
    </AuroraBackground>
  );
};

export default HeroSection;
