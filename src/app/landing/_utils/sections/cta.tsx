import ShimmerButton from "@/components/magicui/shimmer-button";
import Link from "next/link";

const LandingCTASection = () => {
    return <div className="max-w-md px-4 mx-auto section space-y-4 text-center">
        <h2>Let&apos;s Meet and Make Your Business Thrive!</h2>
        <p>This is a no-commitment, free strategy session where we&apos;ll discuss your business goals and challenges. <span>Limited slots available—book now to secure your spot!</span></p>
        <Link href="/#contact" className="inline-block">
            <ShimmerButton>Book Your Free Strategy Session Now!</ShimmerButton>
        </Link>
  </div>;
};

export default LandingCTASection;
