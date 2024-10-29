"use client";
import { IProjectFormInput, IProjectUpdateForm } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import FormButton from "../../components/FormButton";

const UpdateProjectForm = ({
  projectId,
  singleProject,
}: {
  projectId: string;
  singleProject: IProjectFormInput;
}) => {
  const { register, handleSubmit, reset } = useForm<IProjectUpdateForm>();
  const router = useRouter();
  // Ensure singleProject is loaded before rendering the form
  if (!singleProject) {
    return <p>Loading...</p>;
  }
  const onSubmit: SubmitHandler<IProjectUpdateForm> = async (data) => {
    const technologies = data.technology
      .split(",")
      .map((tech: string) => tech.trim());
    const updatedProjectData = { ...data, technology: technologies };
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/projects/${projectId}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedProjectData),
          next: {
            revalidate: 30,
          },
        }
      );
      const data = await res.json();
      console.log("project data", data);
      if (data.success) {
        toast.success(data.message);
        router.refresh();
        router.push("/admin/projects");
        reset();
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="block" htmlFor="title">
        Title
      </label>
      <input
        className="w-full max-w-3xl px-3 py-2 border border-gray-300 rounded mt-2"
        type="text"
        {...register("title", { required: true })}
        defaultValue={singleProject.title}
        defaultChecked
        placeholder="Project Title"
        id="title"
      />
      <label className="block" htmlFor="image">
        Image
      </label>
      <input
        className="w-full max-w-3xl px-3 py-2 border border-gray-300 rounded mt-2"
        type="url"
        placeholder="Project Image"
        {...register("image", { required: true })}
        defaultValue={singleProject.image}
        id="image"
      />
      <label className="block" htmlFor="liveLink">
        Live Link
      </label>
      <input
        className="w-full max-w-3xl px-3 py-2 border border-gray-300 rounded mt-2"
        type="url"
        {...register("liveLink", { required: true })}
        defaultValue={singleProject.liveLink}
        id="live-link"
      />
      <label className="block" htmlFor="clientLink">
        Client Link
      </label>
      <input
        className="w-full max-w-3xl px-3 py-2 border border-gray-300 rounded mt-2"
        type="url"
        {...register("clientLink", { required: true })}
        defaultValue={singleProject.clientLink}
        placeholder="Client Link"
        id="client-link"
      />
      <label className="block" htmlFor="serverLink">
        Server Link
      </label>
      <input
        className="w-full max-w-3xl px-3 py-2 border border-gray-300 rounded mt-2"
        type="url"
        {...register("serverLink", { required: true })}
        defaultValue={singleProject.serverLink}
        placeholder="Server Link"
        id="server-link"
      />
      <label className="block" htmlFor="technology">
        Technologies
      </label>
      <input
        className="w-full max-w-3xl px-3 py-2 border border-gray-300 rounded mt-2"
        type="text"
        {...register("technology", { required: true })}
        defaultValue={singleProject.technology}
        placeholder="Technologies Used In This Project"
        id="technology"
      />
      <label className="block" htmlFor="description">
        Description
      </label>
      <textarea
        {...register("description", { required: true })}
        defaultValue={singleProject.description}
        className="w-full max-w-3xl px-3 py-2 border border-gray-300 rounded mt-2"
        placeholder="Description..."
        id="description"
      />
      <FormButton type="submit" name="Update Project" />
    </form>
  );
};

export default UpdateProjectForm;
