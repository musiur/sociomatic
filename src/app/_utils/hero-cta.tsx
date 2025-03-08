import GetAQuote from "@/components/molecule/get-a-quote";
import GetConsultation from "@/components/molecule/get-consultation";
import { Fragment } from "react";

const HeroCTA = () => {
  return (
    <Fragment>
      <GetConsultation />
      <GetAQuote />
    </Fragment>
  );
};

export default HeroCTA;
