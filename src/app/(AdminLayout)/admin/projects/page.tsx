"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import FormButton from "../../components/FormButton";
interface IFormInput {
  title: string;
  description: string;
  image: string;
  liveLink: string;
  clientLink: string;
  serverLink: string;
}
const ProjectsPage = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className="text-gray-500 flex flex-col mx-auto my-16  max-w-5xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block" htmlFor="title">
          Title
        </label>
        <input
          className="w-full max-w-3xl px-3 py-2 border border-gray-300 rounded mt-2"
          type="text"
          {...register("title")}
          placeholder="Project Title"
          id="title"
        />
        <label className="block" htmlFor="description">
          Description
        </label>
        <textarea
          {...register("description")}
          className="w-full max-w-3xl px-3 py-2 border border-gray-300 rounded mt-2"
          placeholder="Description..."
          id="description"
        />
        <label className="block" htmlFor="image">
          Image
        </label>
        <input
          className="w-full max-w-3xl px-3 py-2 border border-gray-300 rounded mt-2"
          type="text"
          placeholder="Project Image"
          {...register("image")}
          id="image"
        />
        <label className="block" htmlFor="liveLink">
          Live Link
        </label>
        <input
          className="w-full max-w-3xl px-3 py-2 border border-gray-300 rounded mt-2"
          type="text"
          {...register("liveLink")}
          id="live-link"
        />
        <label className="block" htmlFor="clientLink">
          Client Link
        </label>
        <input
          className="w-full max-w-3xl px-3 py-2 border border-gray-300 rounded mt-2"
          type="text"
          {...register("clientLink")}
          placeholder="Client Link"
          id="client-link"
        />
        <label className="block" htmlFor="serverLink">
          Server Link
        </label>
        <input
          className="w-full max-w-3xl px-3 py-2 border border-gray-300 rounded mt-2"
          type="text"
          {...register("serverLink")}
          placeholder="Server Link"
          id="server-link"
        />
        <FormButton type="submit" name="Post Project" />
      </form>
    </div>
  );
};

export default ProjectsPage;
