import React from "react";
import Field from "../Common/Field";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (formData) => {
    navigate("/");
  };
  return (
    <>
      <form
        className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
        onSubmit={handleSubmit(submitForm)}
      >
        <Field label="Email" error={errors.email}>
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            name="email"
            id="email"
            className={`auth-input ${
              errors.email ? "border-red-500" : "border-gray-200"
            }`}
          />
        </Field>
        <Field label="Password" error={errors.password}>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            type="password"
            name="password"
            id="password"
            className={`auth-input ${
              errors.password ? "border-red-500" : "border-gray-200"
            }`}
          />
        </Field>

        <button
          className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
