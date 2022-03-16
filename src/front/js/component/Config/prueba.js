import React, { useState } from "react";
import { useForm } from "react-hook-form";


const FormRegistro = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();
    const onSubmit = (values) => console.log(values);
    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Firstname"
                    {...register("firstName", { required: true })}
                />
                <p>
                    {" "}
                    {errors.firstName?.type === "required" && "First name is required"}
                </p>
                <input
                    type="text"
                    placeholder="Lastname"
                    {...register("lastName", { required: true })}
                />
                <p>{errors.lastName && "Last name is required"}</p>
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
                <p> {errors.email && errors.email.message}</p>
                <input
                    placeholder="Username"
                    {...register("username", {
                        required: "Required",
                        validate: (value) => value !== "admin" || "Nice try!",
                    })}
                />
                <p> {errors.username && errors.username.message}</p>
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
                <p> {errors.password && errors.password.message}</p>
                <select {...register}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <button className="btn btn-light" type="submit">
                    Registrar
                </button>
            </form>
        </div>
    );
};
export default FormRegistro;


















