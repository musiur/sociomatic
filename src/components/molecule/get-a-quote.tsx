import Link from "next/link";
import { Button } from "../ui/button";
import ShimmerButton from "../magicui/shimmer-button";

const GetAQuote = () => {
  return (
    <Link href="/get-a-quote">
      <ShimmerButton className="rounded-md">Get a Quote</ShimmerButton>
    </Link>
  );
};

export default GetAQuote;
