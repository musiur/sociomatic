"use client";

import ShimmerButton from "@/components/magicui/shimmer-button";
import { trackGoogleMetaAdsLandingCTA } from "@/lib/datalayer/scale-with-ads";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

/**
 * Here we are using cal.com
 * Previous there was our own custom form CtaForm
 */
const AdvertisementCTA = ({
  text = "Get a free consultation now",
  section,
  className,
}: {
  text?: string;
  section?: string;
  className?: string;
}) => {
  const router = useRouter();

  const handleOnClick = () => {
    trackGoogleMetaAdsLandingCTA(text, section);
    router.push("/#calendly");
  }
  return (
    <div className={cn(className, "inline-block")}>
      <ShimmerButton
        onClick={handleOnClick}
      >
        {text}
      </ShimmerButton>
    </div>
  );
};

export default AdvertisementCTA;
