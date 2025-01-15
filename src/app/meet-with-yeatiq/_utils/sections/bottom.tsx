import WhatsAppIcon from "@/components/assets/whatsapp";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LandingBottomSection = () => {
  const Links = [
    {
      id: 2,
      icon: (
        <Phone className="w-4 h-4 min-w-4 stroke-secondary" />
      ),
      text: "+971507477541",
      href: "tel:+971507477541",
    },
    {
      id: 1,
      icon: (
        <Mail className="w-4 h-4 min-w-4 stroke-secondary" />
      ),
      text: "hello@thesociomatic.com",
      href: "/contact-us",
    },

    {
      id: 3,
      icon: (
        <WhatsAppIcon className="w-4 h-4 min-w-4 stroke-[2px] stroke-secondary" />
      ),
      text: "+971507477541 (WhatsApp)",
      href: "https://wa.me/+971507477541",
    },
  ];
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
        <p className="inline-block px-4 py-1 rounded-xl border">Contact Me</p>
        <h2>Have Questions?</h2>
        <p>Reach out anytime—I&apos;m happy to help!</p>
        <ul className="space-y-2 flex flex-col gap-2">
          {Links.map((link) => (
            <Link href={link.href} key={link.id}>
              <li className="px-2 py-1 rounded-xl border border-b-4 inline-flex items-center gap-2 hover:shadow-xl hover:border-secondary hover:border-b-4 transaction duration-300 ease-in-out">
                {link.icon}
                {link.text}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LandingBottomSection;
