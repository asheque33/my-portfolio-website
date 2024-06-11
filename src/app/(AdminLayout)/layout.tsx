import React from "react";

import AdminSidebar from "./adminComponents/shared/AdminSidebar";
import AdminNavbar from "./adminComponents/shared/AdminNavbar";

const AdminDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-[90%] mx-auto">
      <AdminNavbar />
      <div className="grid grid-cols-12 w-full ">
        <AdminSidebar />
        <div className="col-span-10 my-4 mx-4">{children}</div>
      </div>
    </section>
  );
};

export default AdminDashboardLayout;
