"use client";

import { Button } from "@components/button";
import { Input, PasswordInput } from "@components/input";
import { useForm } from "react-hook-form";

// const schema = Yup? Zod?

// type FormValues = Infer above

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({ mode: "onChange" });

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
        type="password"
        autoComplete="current-password"
        {...register("password", { required: true })}
      />

      <Button className="mb-4 w-full">Log in</Button>
      <Button className="mb-4" variant="link">
        Forgot password?
      </Button>
      <hr className="mb-4" />
      <p>
        Don&apos;t have an account? <Button variant="link">Sign up</Button>
      </p>
    </form>
  );
  ``;
};

export default LoginPage;
