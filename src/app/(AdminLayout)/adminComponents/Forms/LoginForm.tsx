"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import FormButton from "../../components/FormButton";

interface ILoginFormInput {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { register, handleSubmit } = useForm<ILoginFormInput>();
  const onSubmit: SubmitHandler<ILoginFormInput> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="block" htmlFor="email">
        Email
      </label>
      <input
        className="w-full max-w-3xl px-3 py-2 border border-gray-300 rounded mt-2"
        type="text"
        {...register("email")}
        placeholder="Enter Your Email"
        id="email"
      />
      <label className="block" htmlFor="password">
        Password
      </label>
      <input
        className="w-full max-w-3xl px-3 py-2 border border-gray-300 rounded mt-2"
        type="text"
        {...register("password")}
        placeholder="Enter Your Password"
        id="password"
      />
      <FormButton type="submit" name="Login" />
    </form>
  );
};

export default LoginForm;
