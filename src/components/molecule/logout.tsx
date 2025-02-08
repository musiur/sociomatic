"use client";

import { deleteCookie } from "@/lib/utils";
import { LogOut } from "lucide-react";

const Logout = () => {
  const logoutHandler = () => {
    deleteCookie("token");
    window.location.replace("/login");
  };
  return (
    <div
      className="px-4 py-2 hover:bg-red-200 text-red-600 font-medium flex items-center gap-2 [&>*]:w-4 [&>*]:h-4 cursor-pointer"
      role="button"
      onClick={logoutHandler}
    >
      <LogOut /> Logout
    </div>
  );
};

export default Logout;
