import { IProjectFormInput } from "@/types";
import UpdateProjectForm from "@/app/(AdminLayout)/adminComponents/Forms/UpdateProject";
import UpdateSingleProjectPage from "./[projectId]/page";

const UpdateProjectPage = async () => {
  // const projects = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/`, {
  //   cache: "no-store",
  // });
  // const data = await projects.json();
  // if (data.success) {
  //   console.log(data.message);
  // }
  return (
    <div className="text-gray-500 flex flex-col mx-auto my-16  max-w-5xl">
      {/* {data.data &&
        data.data.map((existingData: IProjectFormInput) => (
          // <UpdateProjectForm
          //   key={existingData._id}
          //   projectId={existingData._id}
          //   singleProject={existingData}
          // />
          <UpdateSingleProjectPage
            key={existingData._id}
            singleProject={existingData}
          />
        ))} */}
      <UpdateSingleProjectPage />
    </div>
  );
};

export default UpdateProjectPage;
