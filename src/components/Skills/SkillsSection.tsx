import SkillsPage from "@/app/(AdminLayout)/admin/skills/page";
import SkillCard from "@/app/(AdminLayout)/adminComponents/SkillCard";

import React from "react";

const SkillsSection = ({ skills }: any) => {
  return (
    <section id="skills" className="scroll-mt-24">
      <h2 className="font-bold text-center p-4 sm:p-6 md:p-8 text-white sm:text-3xl text-xl md:text-4xl">
        Tech Skills
      </h2>
      <div className=" w-full grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1  object-cover items-center p-3 gap-3 mx-auto ">
        {skills.map((skill: any) => (
          <SkillCard key={skill.id} singleSkill={skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
