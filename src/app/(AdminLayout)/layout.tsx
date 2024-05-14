import React from "react";
import SideNavigation from "./components/SideNavigation";

const AdminDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SideNavigation />
      <div>{children}</div>
    </>
  );
};

export default AdminDashboardLayout;
