"use client";

import { Button } from "../ui/button";

const CookiePolicyNotificationBar = () => {
  return (
    <div
      className="fixed bottom-[60px] left-0 w-full z-50 px-[25px]"
      id="cookieBar"
    >
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
          <Button variant="outline">Cancel</Button>
          <Button
            onClick={() => {
              document.getElementById("cookieBar")!.style.display = "hidden";
            }}
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyNotificationBar;
