"use client";

import { ChevronUp } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const GotoTop = () => {
  const pathname = usePathname();
  return (
    <Link
      href={`${pathname}#topPoint`}
      aria-label="topTitle"
      title="topTitle"
      className="fixed bottom-[30px] right-[30px] w-[60px] h-[60px] rounded-full shadow-lg hover:shadow-2xl bg-white hover:bg-muted z-10 flex items-center justify-center border border-secondarymuted"
    >
      <ChevronUp className="w-8 h-8 stroke-secondary" />
    </Link>
  );
};

export default GotoTop;
