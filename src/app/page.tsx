import BannerSection from "@/components/Banner/BannerSection";
import HomePage from "@/components/Home/Home";
import Navbar from "@/components/Shared/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <BannerSection />
      </div>
    </main>
  );
}
