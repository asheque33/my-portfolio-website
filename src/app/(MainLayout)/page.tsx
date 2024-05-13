import AboutSection from "@/components/About/AboutSection";
import BannerSection from "@/components/Banner/BannerSection";
import ContactSection from "@/components/Contact/ContactSection";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Shared/Navbar";

export default function Home() {
  return (
    <div className="container mx-auto px-12 py-4">
      <BannerSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
