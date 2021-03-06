import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../../store/appContext";
import "/workspace/project-final/src/front/styles/seccion6.css";

const Seccion6 = () => {
  const { actions } = useContext(Context);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => {
    actions.register(
      values.email,
      values.username,
      values.password,
      values.phone_number
    );
  };

  return (
    <div className="row">
    <form
      name="registro"
      className="form col-md-12 col-sm-6  d-flex flex-column "
      onSubmit={handleSubmit(onSubmit)}
    >
      <h4 className="reg6 justify-content-center">
        <a name="ancla-1">Registro</a>
      </h4>
      <input
        className="inp mt-0 mx-auto"
        placeholder="Email"
        type="email"
        {...register("email", {
          required: "invalid email address",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address",
          },
        })}
      />
      <p className="error"> {errors.email && errors.email.message}</p>

      <input
        className="inp mt-0 mx-auto"
        placeholder="Username"
        {...register("username", {
          required: "Required",
          validate: (value) => value !== "admin" || "Nice try!",
        })}
      />
      <p className="error"> {errors.username && errors.username.message}</p>

      <input
        className="inp mt-0 mx-auto"
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
        className="inp mt-0 mx-auto"
        type="tel"
        placeholder="phone number"
        {...register("phone_number", {
          required: "Required",
          minLength: 6,
          maxLength: 12,
        })}
      />

      <button className="button-47 d-flex " type="submit">
        Registrar
      </button>
    </form>
    </div>
  );
};
export default Seccion6;
