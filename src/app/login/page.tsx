"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "@components/button";
import { Input, PasswordInput } from "@components/input";

// const schema = Yup? Zod?

// type FormValues = Infer above

const LoginPage = () => {
  const { register, handleSubmit } = useForm({ mode: "onChange" });

  return (
    <form onSubmit={handleSubmit(() => {})} className="text-center">
      <h3 className="mb-4">Log in</h3>

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
        autoComplete="current-password"
        {...register("password", { required: true })}
      />

      <Button type="submit" className="mb-4 w-full">
        Log in
      </Button>
      <Link href="/forgot-password" className="button button-link mb-4">
        Forgot password?
      </Link>
      <hr className="mb-4" />
      <p>
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" className="button button-link">
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginPage;
