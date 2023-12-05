"use client";

import { useState } from "react";

const UiUxTabLayout = ({ children }: { children: React.ReactNode }) => {
  const [tab, setTab] = useState("uiux");
  return (
    <div>
      <div className="mt-16 flex items-center justify-center">
      <ul className="flex items-center justify-center shadow-lg rounded-[20px]">
        {["uiux", "graphic"].map((item: string) => {
          return (
            <li
              key={item}
              className={`px-[3rem] py-[1rem] transition ease-in-out duration-500 ${
                item === "uiux" ? "rounded-l-[20px]" : "rounded-r-[20px]"
              } ${item === tab ? "bg-secondary text-muted" : "bg-muted"} cursor-pointer`}
              onClick={() => setTab(item)}
            >
              {item === "uiux" ? "UI/UX" : "Graphic"}
            </li>
          );
        })}
      </ul>
      </div>
      <section
        className={`transition ease-in-out duration-500 ${
          tab === "uiux"
            ? "[&>*:first-child]:block [&>*:last-child]:hidden"
            : "[&>*:first-child]:hidden [&>*:last-child]:block"
        }`}
      >
        {children}
      </section>
    </div>
  );
};

export default UiUxTabLayout;
