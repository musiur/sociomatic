import ShimmerButton from "@/components/magicui/shimmer-button";
import { Button } from "@/components/ui/button";
import { Fragment } from "react";

const AdvertisementCTA = () => {
  return (
    <Fragment>
      <ShimmerButton className="w-auto">Get Started Right Away</ShimmerButton>
      <Button variant="outline">Start Your Free Consultation Now</Button>
    </Fragment>
  );
};

export default AdvertisementCTA;
