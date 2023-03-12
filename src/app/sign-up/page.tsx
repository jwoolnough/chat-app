"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "@components/button";
import { Input, PasswordInput } from "@components/input";

// const schema = Yup? Zod?

// type FormValues = Infer above

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async () => {
    await delay(3000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-center">
      <h3 className="mb-4">Sign up</h3>

      <Input
        label="Email"
        type="email"
        placeholder="joe@bloggs.com"
        autoFocus
        autoComplete="username"
        {...register("email", { required: true })}
      />
      <PasswordInput
        label="Password"
        autoComplete="new-password"
        {...register("password", { required: true })}
      />
      <PasswordInput
        label="Confirm password"
        autoComplete="new-password"
        {...register("confirmPassword", { required: true })}
      />

      <Button type="submit" className="mb-4 w-full">
        Sign up
      </Button>
      <hr className="mb-4" />
      <p>
        Already have an account?{" "}
        <Link href="/login" className="button button-link">
          Log in
        </Link>
      </p>
    </form>
  );
};

export default SignUpPage;
