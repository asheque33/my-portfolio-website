import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Shared/Navbar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen flex-col  bg-[#121212]">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default MainLayout;
