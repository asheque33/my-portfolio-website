import Image from "next/image";
import React from "react";

const SkillCard = ({ singleSkill }: any) => {
  return (
    <div className="mx-auto">
      <div className=" w-full flex gap-2 items-center border border-neutral-700 bg-color1 bg-opacity-90 text-neutral-400  rounded-md px-3 py-1.5">
        <Image src={singleSkill?.image} alt="skillImg" height={20} width={20} />
        <strong className=" block">{singleSkill?.title}</strong>
      </div>
    </div>
  );
};

export default SkillCard;
