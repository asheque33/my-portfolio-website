"use client";
import FormButton from "@/app/(AdminLayout)/components/FormButton";
import { useCreateSkillMutation } from "@/redux/api/skillsApi/skillsApi";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
type IFormInput = {
  title: string;
};

const CreateSkillPage = () => {
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (skillData) => {
    try {
      const res = await fetch("http://localhost:6000/skill", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(skillData),
        cache: "no-store",
      });
      const data = await res.json();
      console.log(data);
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <form>
      <label className="block" htmlFor="skill">
        Skill
      </label>
      <input
        className="w-full max-w-3xl px-3 py-2 border border-gray-300 rounded mt-2"
        type="text"
        {...register("title")}
        placeholder="Project Skill"
        id="skill"
      />
      <FormButton type="submit" name="Add Skill" />
    </form>
  );
};

export default CreateSkillPage;
