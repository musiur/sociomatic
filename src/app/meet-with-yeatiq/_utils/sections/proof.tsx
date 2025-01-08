import { CheckCheckIcon } from "lucide-react";
import Image from "next/image";

const LandingProofSection = () => {
  return (
    <div className="container section grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <Image
        src="https://utfs.io/f/TLm9XcQ0Drp9Mwu8Tm1dzq50nhPkDJ2fyaXpVUIusTKrltEW"
        alt="proof"
        width={1000}
        height={1000}
        className="rounded-2xl"
      />
      <div className="space-y-4">
        <p className="inline-block px-4 py-1 rounded-xl border">
          Proven Results You Can Trust
        </p>
        <h2>
          From $0 to $1.2 Million—
          <span className="text-secondary">
            Let&apos;s Create Your Success Story
          </span>
          !
        </h2>
        <p>
          I&apos;m Yeatiq, the founder of Sociomatic, a Dubai-licensed LLC. Over
          the past decade,{" "}
          <span className="font-semibold">
            I&apos;ve helped 700+ businesses achieve remarkable growth,
            including turning startups into million-dollar brands.
          </span>
        </p>
        <div className="space-y-4">
          <p>Highlight case studies with concise bullet points</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <CheckCheckIcon className="w-6 h-6 min-w-6 bg-secondary/10 stroke-secondary rounded-full p-1" />{" "}
              Helped an e-commerce brand grow from $0 to $1.2M in 12 months.
            </li>
            <li className="flex items-center gap-2">
              <CheckCheckIcon className="w-6 h-6 min-w-6 bg-secondary/10 stroke-secondary rounded-full p-1" />{" "}
              Generated 52,400 visitors and 3,230 leads for a service-based
              business in Dubai. business in Dubai.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LandingProofSection;
