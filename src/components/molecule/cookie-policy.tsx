"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
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
      <div className="container border border-secondary p-[25px] rounded-[10px] flex flex-col small-gap bg-white">
        <p>
          Dolore exercitation ea proident laboris fugiat nostrud consectetur
          sunt aute et ullamco. Dolore exercitation ea proident laboris fugiat
          nostrud consectetur sunt aute et ullamco. Dolore exercitation ea
          proident laboris fugiat nostrud consectetur sunt aute et ullamco.
          Dolore exercitation ea proident laboris fugiat nostrud consectetur
          sunt aute et ullamco.
        </p>
        <div className="flex items-center small-gap justify-end">
          <Button
            variant="outline"
            onClick={() => {
              winD && localStorage.removeItem("cookieWarning");
              setShow(false);
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              winD && localStorage.setItem("cookieWarning", "true");
              setShow(false);
            }}
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  ) : null;
};

export default CookiePolicyNotificationBar;
