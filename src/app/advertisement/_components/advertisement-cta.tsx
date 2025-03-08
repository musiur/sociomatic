import ShimmerButton from "@/components/magicui/shimmer-button";
import GetConsultation from "@/components/molecule/get-consultation";
import { Button } from "@/components/ui/button";
import { Fragment } from "react";
import CTAForm from "./cta-form";

const AdvertisementCTA = () => {
  return (
    <Fragment>
      <CTAForm />
      <GetConsultation />
    </Fragment>
  );
};

export default AdvertisementCTA;
