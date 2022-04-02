import React from "react";
import { useForm } from "react-hook-form";
import "../../../styles/ConfigComp/changePassword.css";

export const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form className="my-4 bg-white" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="py-1 my-2 ms-4"
        type="password"
        placeholder="Tu contraseña actual: "
        {...register("actuallyPassword", { required: true })}
      />
      <p className="text-danger">
        {" "}
        {errors.actuallyPassword?.type === "required" &&
          "Ingresa tu contraseña actual"}
      </p>
      <input
        className="py-1 my-2 ms-4"
        type="password"
        placeholder="Contraseña nueva: "
        {...register("newPassword", {
          required: true,
          min: 8,
          maxLength: 20,
          pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/i,
        })}
      />
      <p className="text-danger">
        {" "}
        {errors.newPassword?.type === "required" &&
          "La contraseña debe ser alfanumerica"}
      </p>
      <input
        className="py-1 my-2 ms-4"
        type="password"
        placeholder="Repite contraseña: "
        {...register("passwordRepeat", {
          required: true,
        })}
      />
      <p className="text-danger">
        {" "}
        {errors.passwordRepeat?.type === "required" &&
          "Repite la contraseña correctamente"}
      </p>
      <input className="my-2 ms-4" type="submit" />
    </form>
  );
};
