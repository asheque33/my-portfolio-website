"use client";

import { IProjectFormInput } from "@/types";
import React from "react";
import ProjectCard from "../UI/ProjectCard";

const ProjectsSection = ({ projects }: { projects: IProjectFormInput[] }) => {
  return (
    <section id="projects" className="scroll-mt-16">
      <h2 className="font-bold text-center pt-8 pb-1 px-4 sm:px-6 md:px-8 text-neutral-300 sm:text-3xl text-2xl md:text-4xl">
        Projects
      </h2>
      <p className="text-center text-neutral-400 text-base pb-4">Explore Now</p>
      <div
        className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-y-8  md:gap-x-2
       mx-auto "
      >
        {projects.map((project: IProjectFormInput) => (
          <ProjectCard key={project._id} singleProject={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
