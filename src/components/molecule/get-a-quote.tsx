import Link from "next/link";
import { Button } from "../ui/button";

const GetAQuote = () => {
  return (
    <Link href="/get-a-quote">
      <Button variant="secondary">Get a Quote</Button>
    </Link>
  );
};

export default GetAQuote;
