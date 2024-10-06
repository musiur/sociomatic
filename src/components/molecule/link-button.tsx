import Link from "next/link";
import { Button } from "../ui/button";

const LinkButton = () => {
  return (
    <Link href="/services" className="w-full flex justify-center">
      <Button variant="outline" className="w-full sm:w-auto">Explore all our services</Button>
    </Link>
  );
};

export default LinkButton;
