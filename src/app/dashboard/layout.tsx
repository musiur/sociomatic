import PrivateRoute from "@/components/layout/private-route";
import { ReactElement } from "react";

const DashboardLayout = ({ children }: { children: ReactElement }) => {
  return (
    <PrivateRoute>{children}</PrivateRoute>
  );
};

export default DashboardLayout;
