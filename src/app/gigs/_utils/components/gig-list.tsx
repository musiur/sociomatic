import { T__Gig } from "../types/gigs-data-types";
import { GigsData } from "./data/gig-list-data";
import GigCard from "./gig-card";

export default function GigList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {GigsData.map((gig: T__Gig) => (
        <GigCard key={gig.id} gig={gig} />
      ))}
    </div>
  );
}
