import ShimmerButton from "@/components/magicui/shimmer-button";
import Link from "next/link";
import { FreeOnlineDialogue } from "./free-online-dialogue";
import DataLayerPusherLink from "../components/data-layer-pusher-link";

const LandingHeroSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 container section items-center">
      <div className="space-y-8">
        <h1>
          Transform Your Business with{" "}
          <span className="text-secondary">Proven Success Strategies</span> in
          Dubai!
        </h1>
        <p>
          Meet Yeatiq, a trusted expert with 700+ successful projects and 500+
          glowing reviews, ready to help your business grow.
        </p>
        <div className="flex items-center flex-wrap gap-4">
          <DataLayerPusherLink />
          <FreeOnlineDialogue />
        </div>
      </div>
      <div className="min-h-[300px] shadow-2xl z-10 relative rounded-2xl">
        <iframe
          className="w-full h-full min-h-[30vh] md:min-h-[60vh] lg:min-h-[40vh] rounded-2xl mx-auto border shadow-xl"
          src="https://www.youtube.com/embed/04pWB5aj-DE?si=KhMa8PqMC6WmL_K1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default LandingHeroSection;
