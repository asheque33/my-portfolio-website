"use client";
import FormButton from "@/app/(AdminLayout)/components/FormButton";
import { IProjectFormInput } from "@/types";
import { useRouter } from "next/navigation";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const ProjectForm = () => {
  const { register, handleSubmit, reset } = useForm<IProjectFormInput>();
  const router = useRouter();
  const onSubmit: SubmitHandler<IProjectFormInput> = async (projectData) => {
    try {
      const res = await fetch("http://localhost:4000/project", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(projectData),
        cache: "no-store",
      });
      const data = await res.json();
      if (data.success) {
        toast.success(data.message);
        router.refresh();
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
        placeholder="Project Title"
        id="title"
      />
      <label className="block" htmlFor="description">
        Description
      </label>
      <textarea
        {...register("description", { required: true })}
        className="w-full max-w-3xl px-3 py-2 border border-gray-300 rounded mt-2"
        placeholder="Description..."
        id="description"
      />
      <label className="block" htmlFor="image">
        Image
      </label>
      <input
        className="w-full max-w-3xl px-3 py-2 border border-gray-300 rounded mt-2"
        type="url"
        placeholder="Project Image"
        {...register("image", { required: true })}
        id="image"
      />
      <label className="block" htmlFor="liveLink">
        Live Link
      </label>
      <input
        className="w-full max-w-3xl px-3 py-2 border border-gray-300 rounded mt-2"
        type="url"
        {...register("liveLink", { required: true })}
        id="live-link"
      />
      <label className="block" htmlFor="clientLink">
        Client Link
      </label>
      <input
        className="w-full max-w-3xl px-3 py-2 border border-gray-300 rounded mt-2"
        type="url"
        {...register("clientLink", { required: true })}
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
        placeholder="Server Link"
        id="server-link"
      />
      <FormButton type="submit" name="Post Project" />
    </form>
  );
};

export default ProjectForm;
