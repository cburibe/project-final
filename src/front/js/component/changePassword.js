import React, { Component } from "react";
import { CgProfile } from 'react-icons/cg';
import "../../styles/changePassword.css"

export const ChangePassword = () => (
    <div>
        <div className="d-flex justify-content-center">
            <span className="profileIcon px-3"><CgProfile /></span>
            <h1 className="fs-2 py-4">Luis Perez</h1>
        </div>

        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
                Tu contraseña actual:
            </label>
            <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Digita aqui"
            />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
                Contraseña nueva:
            </label>
            <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Digita aqui"
            />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
                Repite contraseña:
            </label>
            <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Digita aqui"
            />
        </div>
    </div >
);
