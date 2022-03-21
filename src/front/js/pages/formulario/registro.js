import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../../store/appContext";
import "./formulario.css";

const FormRegistro = () => {
  const { actions } = useContext(Context);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => {
    console.log(values);
    actions.register(
      values.email,
      values.username,
      values.password,
      values.phone
    );
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="inp"
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
        className="inp"
        onFocus={true}
        placeholder="Username"
        {...register("username", {
          required: "Required",
          validate: (value) => value !== "admin" || "Nice try!",
        })}
      />
      <p className="error"> {errors.username && errors.username.message}</p>

      <input
        className="inp"
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
      <input
        className="inp"
        type="tel"
        placeholder="phone number"
        {...register("phone_number", {
          required: true,
          minLength: 6,
          maxLength: 12,
        })}
      />

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
