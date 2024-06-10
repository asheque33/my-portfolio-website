import ProjectCard from "@/app/(AdminLayout)/adminComponents/ProjectCard";
import React from "react";

const ProjectsSection = ({ projects }: any) => {
  return (
    <section id="skills" className="scroll-mt-24">
      <h2 className="font-bold text-center pt-8 pb-1 px-4 sm:px-6 md:px-8 text-white sm:text-3xl text-xl md:text-4xl">
        Projects
      </h2>
      <p className="text-center text-white text-lg pb-4">Explore Now</p>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 
       mx-auto md:m-0"
      >
        {projects.map((project: any) => (
          <ProjectCard key={project._id} singleProject={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
