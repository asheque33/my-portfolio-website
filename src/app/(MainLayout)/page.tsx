import AboutSection from "@/components/About/AboutSection";
import BannerSection from "@/components/Banner/BannerSection";
import ContactSection from "@/components/Contact/ContactSection";
import ProjectsSection from "@/components/Projects/ProjectsSection";
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
  const res2 = await fetch("http://localhost:4000/projects", {
    cache: "no-store",
  });
  const projectsData = await res2.json();
  const projects = projectsData["data"];
  if (projectsData.success) {
    console.log(projectsData.message);
  }

  return (
    <div className="container mx-auto px-12 py-4">
      <BannerSection />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
