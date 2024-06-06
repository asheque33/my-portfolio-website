"use client";
import React from "react";
import Button from "../../adminComponents/Button";
import Link from "next/link";
import Container from "@/components/Shared/container/Container";
import { useGetSkillsQuery } from "@/redux/api/skillsApi/skillsApi";

const SkillsPage = () => {
  const { data: skills, isLoading } = useGetSkillsQuery(undefined);
  if (isLoading) return <div>Loading......</div>;
  console.log(skills);
  return (
    <Container>
      <div className="flex items-center justify-evenly gap-x-8 py-12">
        <h1>Skills</h1>
        <Link href="/admin/skills/create">
          {" "}
          <Button label="Add New" />
        </Link>
      </div>
    </Container>
  );
};

export default SkillsPage;
