import AboutSection from "@/components/About/AboutSection";
import BannerSection from "@/components/Banner/BannerSection";
import ContactSection from "@/components/Contact/ContactSection";
import Footer from "@/components/Footer/Footer";
import ProjectsSection from "@/components/Projects/ProjectsSection";
import Navbar from "@/components/Shared/Navbar";
import SkillsSection from "@/components/Skills/SkillsSection";

export default async function Home() {
  const res = await fetch("http://localhost:4000/skills", {
    cache: "no-store",
  });
  const data = await res.json();
  const skills = data["data"];
  if (data.success) {
    console.log(data.message);
  }
  return (
    <div className="container mx-auto px-12 py-4">
      <BannerSection />
      <SkillsSection skills={skills} />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
