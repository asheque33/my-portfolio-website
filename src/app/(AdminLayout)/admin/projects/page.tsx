import Link from "next/link";
import Button from "../../adminComponents/Button";
import ProjectCard from "../../adminComponents/ProjectCard";
import { IProjectFormInput } from "@/types";

const ProjectsPage = async () => {
  const projects = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`, {
    cache: "no-store",
  });
  const data = await projects.json();
  if (data.success) {
    console.log(data.message);
  }

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
      <div className="flex gap-6 justify-center ">
        {data.data &&
          data?.data.map((d: IProjectFormInput) => (
            <ProjectCard key={d._id} singleProject={d} />
          ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
