"use client";
import SkillCard from "@/app/(AdminLayout)/adminComponents/SkillCard";
import { ISkillFormInput } from "@/types";

import React from "react";

const SkillsSection = ({ skills }: { skills: ISkillFormInput[] }) => {
  return (
    <section id="skills" className="scroll-mt-16 md:scroll-mt-24">
      <h2 className="font-bold text-center p-4 sm:p-6 md:p-8 mt-3 sm:mt-0 text-neutral-300 sm:text-3xl text-xl md:text-4xl">
        Tech Skills
      </h2>
      <div className=" w-full grid lg:flex flex-wrap md:grid-cols-4 sm:grid-cols-3  grid-cols-1  object-cover items-center gap-3 md:gap-2 p-3  lg:gap-3 mx-auto ">
        {skills.map((skill: ISkillFormInput) => (
          <SkillCard key={skill.id} singleSkill={skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
