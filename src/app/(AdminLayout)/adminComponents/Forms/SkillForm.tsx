"use client";
import React from "react";
import FormButton from "@/app/(AdminLayout)/components/FormButton";
import { ISkillFormInput } from "@/types";

import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const SkillForm = () => {
  const { register, handleSubmit, reset } = useForm<ISkillFormInput>();
  const router = useRouter();
  const onSubmit: SubmitHandler<ISkillFormInput> = async (skillData) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/skill`, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(skillData),
        next: {
          revalidate: 30,
        },
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

export default SkillForm;
