import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

import { ReactElement } from "react";



const PrivateRoute = ({ children }: { children: ReactElement }) => {
  const token = cookies().get("token")?.value || "";

  if (!token) {
    redirect("/login");
  }
  return children;
};

export default PrivateRoute;
