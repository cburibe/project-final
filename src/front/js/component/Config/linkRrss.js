import React from "react";
import { useForm } from "react-hook-form";
import "../../../styles/ConfigComp/linkRrss.css";

export const LinkRrss = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form className="my-4 bg-white " onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        className="py-1 my-2 ms-4"
        placeholder="Instagram"
        {...register("Instagram", { required: true, maxLength: 80 })}
      />
      <input
        type="text"
        className="py-1 my-2 ms-4"
        placeholder="Facebook"
        {...register("Facebook", { required: true, maxLength: 100 })}
      />
      <input
        type="text"
        className="py-1 my-2 ms-4"
        placeholder="LinkedIn"
        {...register("LinkedIn", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        type="text"
        className="py-1 my-2 ms-4"
        placeholder="Telegram"
        {...register("Telegram", { required: true, maxLength: 12 })}
      />

      <input className="my-3 ms-4" type="submit" />
    </form>
  );
};
