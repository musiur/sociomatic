import Link from "next/link";
import { Button } from "../ui/button";

const GetConsultation = () => {
  return (
    <Link href={`/#calendly`} aria-label="topTitle" title="topTitle" className="w-full sm:w-auto">
      <Button variant="outline" className="w-full">Get a Free Consultation</Button>
    </Link>
  );
};

export default GetConsultation;
