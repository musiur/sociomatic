"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
const winD = typeof window !== "undefined";
const CookiePolicyNotificationBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (winD) {
      setShow(localStorage.getItem("cookieWarning") ? false : true);
    }
  }, []);
  return show ? (
    <div className="fixed bottom-[60px] left-0 w-full z-50 px-[25px]">
      <div className="container border border-secondarymuted p-[25px] rounded-[10px] flex flex-col small-gap bg-white/50 backdrop-blur-xl">
        <p className="text-sm">
          Hello there! 🍪 Just a heads-up: we use cookies to make your visit
          sweeter. By continuing to browse, you&apos;re agreeing to our cookie
          policy. Dive into our&nbsp;
          <Link href="" className="text-sm text-secondary hover:underline">
            Privacy Policy
          </Link>
          &nbsp; for the delicious details. Enjoy your stay!
        </p>
        <div className="flex items-center small-gap justify-end">
          <div
            onClick={() => {
              winD && localStorage.removeItem("cookieWarning");
              setShow(false);
            }}
            className="text-sm cursor-pointer"
          >
            Cancel
          </div>
          <div
            onClick={() => {
              winD && localStorage.setItem("cookieWarning", "true");
              setShow(false);
            }}
            className="text-sm text-secondary cursor-pointer"
          >
            Accept
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default CookiePolicyNotificationBar;
