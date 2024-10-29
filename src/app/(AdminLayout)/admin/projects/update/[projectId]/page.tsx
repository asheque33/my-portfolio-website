import UpdateProjectForm from "@/app/(AdminLayout)/adminComponents/Forms/UpdateProject";
import { IProjectFormInput } from "@/types";
import React from "react";

const UpdateSingleProjectPage = async ({
  params,
}: {
  params: { projectId: string };
}) => {
  const projects = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/projects/${params.projectId}`,
    {
      cache: "no-store",
    }
  );
  const data = await projects.json();
  if (data.success) {
    console.log(data.message);
  }
  return (
    <div>
      <UpdateProjectForm
        projectId={params.projectId}
        singleProject={data.data}
      />
    </div>
  );
};

export default UpdateSingleProjectPage;
