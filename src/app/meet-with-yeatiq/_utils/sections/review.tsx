import ShimmerButton from "@/components/magicui/shimmer-button";
import { CheckCheckIcon, FastForwardIcon, FileWarning, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LandingReviewSection = () => {
  return (
    <div className="container section grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="space-y-4">
        <p className="inline-block px-4 py-1 rounded-xl border">
          What Clients Are Saying
        </p>
        <h2>Struggling with Digital Marketing?</h2>

        <div className="space-y-4">
          <p>Let&apos;s Fix Your Biggest Challenges Together.</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FileWarning className="w-6 h-6 min-w-6 bg-secondary/10 stroke-secondary rounded-full p-1" />{" "}
              Lack of ROI in digital marketing
            </li>
            <li className="flex items-center gap-2">
              <FileWarning className="w-6 h-6 min-w-6 bg-secondary/10 stroke-secondary rounded-full p-1" />{" "}
              Difficulty scaling your business.
            </li>
            <li className="flex items-center gap-2">
              <FileWarning className="w-6 h-6 min-w-6 bg-secondary/10 stroke-secondary rounded-full p-1" />{" "}
              Need for better strategies and execution
            </li>
          </ul>
          <p>
            Your Success Starts Here! Join 500+ Happy Clients &nbsp;
            <span className="font-semibold text-secondary">
              Who Trust Yeatiq!
            </span>
            &nbsp;and Don&apos;t miss this chance to meet in person and create a
            winning strategy
          </p>
        </div>
        <Link href="/meet-with-yeatiq/#contact" className="inline-block">
          <ShimmerButton>Book Your Free Meeting Today!</ShimmerButton>
        </Link>
      </div>
      <Image
        src="https://utfs.io/f/TLm9XcQ0Drp9VpRj6CXtzjwcuqoVvpZmxNrkdWPhDefA1Mb2"
        alt="proof"
        width={1000}
        height={1000}
        className="rounded-2xl"
      />
    </div>
  );
};

export default LandingReviewSection;
