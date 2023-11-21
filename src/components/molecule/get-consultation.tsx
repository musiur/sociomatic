import Link from "next/link";
import { Button } from "../ui/button";

const GetConsultation = () => {
  return (
    <Link href={`/#calendly`} aria-label="topTitle" title="topTitle">
      <Button variant="outline">Get a Free Consultation</Button>
    </Link>
  );
};

export default GetConsultation;
