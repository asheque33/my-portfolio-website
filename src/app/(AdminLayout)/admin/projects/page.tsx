"use client";

import Link from "next/link";
import Button from "../../adminComponents/Button";
import { useGetProjectsQuery } from "@/redux/api/projectsApi/projectsApi";

const ProjectsPage = () => {
  const { data: projects, isLoading } = useGetProjectsQuery(undefined);
  if (isLoading) return <div>Loading......</div>;

  return (
    <div>
      <div className="flex items-center justify-evenly px-4 py-12">
        <h1 className="text-lg font-semibold border-b-2 border-neutral-600">
          Recent Projects
        </h1>
        <Link href="/admin/projects/create">
          <Button label="Add New" />
        </Link>
      </div>
      <p>{projects.length}</p>
    </div>
  );
};

export default ProjectsPage;
