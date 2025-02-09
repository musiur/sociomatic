import { Fragment } from "react";
import { Action___GET__AllGigs } from "./_utils/actions";
import { T___Gig } from "./_utils/types";
import Portfolio from "./_utils/portfolio";
import Gigs from "./_utils/gigs";

const GigsPage = async () => {
  const result = await Action___GET__AllGigs();
  const gigs: T___Gig[] = result.data;
  return (
    <Fragment>
      <Portfolio />
      <Gigs gigs={gigs} />
    </Fragment>
  );
};

export default GigsPage;
