import ShimmerButton from "@/components/magicui/shimmer-button";
import Link from "next/link";

const LandingHeroSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 container section">
      <div className="space-y-8">
        <h1>
          Transform Your Business with <span className="text-secondary">Proven Success Strategies</span> in Dubai!
        </h1>
        <p>
          Meet Yeatiq, a trusted expert with 700+ successful projects and 500+
          glowing reviews, ready to help your business grow.
        </p>
        <Link href="/#contact" className="inline-block">
          <ShimmerButton>Book Your Free Strategy Session Now!</ShimmerButton>
        </Link>
      </div>
      <div className="p-6 bg-secondary rounded-lg">a</div>
    </div>
  );
};

export default LandingHeroSection;
