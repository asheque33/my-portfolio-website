"use client";
import FormButton from "@/app/(AdminLayout)/components/FormButton";
import { ISkillFormInput } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const CreateSkillPage = () => {
  const { register, handleSubmit, reset } = useForm<ISkillFormInput>();
  const router = useRouter();
  const onSubmit: SubmitHandler<ISkillFormInput> = async (skillData) => {
    try {
      const res = await fetch("http://localhost:4000/skill", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(skillData),
        cache: "no-store",
      });
      const data = await res.json();
      if (data.success) {
        console.log(data.message);
        router.refresh();
        reset();
      }
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="block" htmlFor="skill">
        Skill
      </label>
      <input
        className="w-full max-w-3xl px-3 py-2 border border-gray-300 rounded my-2"
        type="text"
        {...register("title")}
        placeholder="Tech Skill"
        id="skill"
      />
      <label className="block" htmlFor="skill-url">
        Image URL
      </label>
      <input
        className="w-full max-w-3xl px-3 py-2 border border-gray-300 rounded mt-2"
        type="url"
        {...register("image")}
        placeholder="Skill Image URL"
        id="image"
      />
      <FormButton type="submit" name="Add Skill" />
    </form>
  );
};

export default CreateSkillPage;
