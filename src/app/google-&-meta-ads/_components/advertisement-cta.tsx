"use client";

import ShimmerButton from "@/components/magicui/shimmer-button";
import { trackGoogleMetaAdsLandingCTA } from "@/lib/datalayer/google-&-meta-ads";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

/**
 * Here we are using cal.com
 * Previous there was our own custom form CtaForm
 */
const AdvertisementCTA = ({
  text = "Get a free consultation now",
  className,
}: {
  text?: string;
  className?: string;
}) => {
  const router = useRouter();

  const handleOnClick = () => {
    trackGoogleMetaAdsLandingCTA();
    router.push("/#calendly");
  }
  return (
    <div className={cn(className, "inline-block")}>
      <ShimmerButton
        // data-cal-link="yeatiq-ceo-of-the-sociomatic/unlock-real-growth-your-90-day-ad-challenge"
        // data-cal-namespace="unlock-real-growth-your-90-day-ad-challenge"
        // data-cal-config="{'layout':'month_view'}"
        onClick={handleOnClick}
      >
        {text}
      </ShimmerButton>
    </div>
  );
};

export default AdvertisementCTA;
