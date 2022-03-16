import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./formulario.css";

const FormRegistro = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Firstname"
        {...register("firstName", { required: true })}
      />
      <p className="error">
        {" "}
        {errors.firstName?.type === "required" && "First name is required"}
      </p>

      <input
        type="text"
        placeholder="Lastname"
        {...register("lastName", { required: true })}
      />
      <p className="error">{errors.lastName && "Last name is required"}</p>
      <input
        placeholder="Email"
        type="email"
        {...register("email", {
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address",
          },
        })}
      />
      <p className="error"> {errors.email && errors.email.message}</p>

      <input
        onFocus="true"
        placeholder="Username"
        {...register("username", {
          required: "Required",
          validate: (value) => value !== "admin" || "Nice try!",
        })}
      />
      <p className="error"> {errors.username && errors.username.message}</p>

      <input
        placeholder="Password"
        type="password"
        {...register("password", {
          required: "Required",
          pattern: {
            minLenght: {
              value: 6,
              message: "La contraseña debe tener al menos 6 caracteres",
            },
            message: "invalid password",
          },
        })}
      />
      <p className="error"> {errors.password && errors.password.message}</p>
      <select className="gender" {...register}>
        <option value="Mujer">Mujer</option>
        <option value="Hombre">Hombre</option>
      </select>

      <button
        className="button-47"
        style={{ textAlign: "right" }}
        type="submit"
      >
        Registrar
      </button>
    </form>
  );
};
export default FormRegistro;
