import GigCard from "./gig-card";
import { T___Gig } from "./types";

const Gigs = ({ gigs }: { gigs: T___Gig[] }) => {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold">All My Gigs</h2>
      </div>
      <div className="pb-32 pt-10 container mx-auto flex flex-wrap justify-start items-start gap-10">
        {gigs?.map((item: T___Gig) => {
          return <GigCard item={item} key={item._id} />;
        })}
      </div>
    </section>
  );
};

export default Gigs;
