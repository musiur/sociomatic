import WhatsAppIcon from "@/components/assets/whatsapp";
import { CheckCheckIcon, Mail, Phone } from "lucide-react";
import Image from "next/image";

const LandingBottomSection = () => {
  return (
    <div className="container section grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <Image
        src="https://utfs.io/f/TLm9XcQ0Drp9UlZLWlhilgdbT9zuP1QmXAC4eyRZ8kHFS3sM"
        alt="proof"
        width={1000}
        height={1000}
        className="rounded-[40px] max-w-md shadow-2xl"
      />
      <div className="space-y-4">
        <p className="inline-block px-4 py-1 rounded-xl border">
          Contact Me
        </p>
        <h2>Have Questions?</h2>
        <p>Reach out anytime—I&apos;m happy to help!</p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <Mail className="w-6 h-6 min-w-6 bg-secondary/10 stroke-secondary rounded-full p-1" />{" "}
            Email
          </li>
          <li className="flex items-center gap-2">
            <Phone className="w-6 h-6 min-w-6 bg-secondary/10 stroke-secondary rounded-full p-1" />{" "}
            +971507477541
          </li>
          <li className="flex items-center gap-2">
            <WhatsAppIcon className="w-6 h-6 min-w-6 bg-secondary/10 stroke-[2px] stroke-secondary rounded-full p-1" />{" "}
             +971507477541 (WhatsApp)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LandingBottomSection;
