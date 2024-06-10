import React from "react";
import Button from "../../adminComponents/Button";
import Link from "next/link";
import Container from "@/components/Shared/container/Container";
import SkillCard from "../../adminComponents/SkillCard";

const SkillsPage = async () => {
  const skills = await fetch("http://localhost:4000/skills", {
    cache: "no-store",
  });
  const data = await skills.json();
  if (data.success) {
    console.log(data.message);
  }
  return (
    <Container>
      <div className="flex items-center justify-evenly gap-x-8 py-12">
        <h1>Skills</h1>
        <Link href="/admin/skills/create">
          {" "}
          <Button label="Add New" />
        </Link>
      </div>
      <div className=" max-w-screen-xl w-full mx-auto flex flex-wrap  items-center p-3 gap-3 ">
        {data.data &&
          data?.data.map((d: any) => <SkillCard key={d.id} singleSkill={d} />)}
      </div>
    </Container>
  );
};

export default SkillsPage;
