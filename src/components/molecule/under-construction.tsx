"use client";

import { usePathname } from "next/navigation";

const UnderConstruction = () => {
  const pathname = usePathname();

  return pathname.includes("joining") ? (
    <div className="py-2 text-center bg-pink-700 text-white animate-pulse">
      This site is under maintenance
    </div>
  ) : null;
};

export default UnderConstruction;
