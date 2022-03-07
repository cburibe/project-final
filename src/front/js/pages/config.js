import React, { useState, useEffect, useContext } from "react";
import "../../styles/config.css";
import { FaCog } from 'react-icons/fa';
import { Context } from "../store/appContext";
import { ChangePassword } from "../component/changePassword";

export const Config = () => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="d-flex">
                            <span className="configIcon px-2"><FaCog /></span>
                            <h1 className="fs-2 py-2">Configuración</h1>
                        </div>
                        <div>
                            <ul className="fs-4 py-3">
                                <li><a href="#">Cambiar contraseña</a></li>
                                <li><a href="#">Manejo de websites</a></li>
                                <li><a href="#">Privacidad y seguridad</a></li>
                                <li><a href="#">Terminos y condiciones</a></li>
                                <li><a href="#">Eliminar cuenta</a></li>
                                <li><a href="#">Ayuda</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6">
                        <ChangePassword />
                    </div>
                </div>
            </div>

        </>
    );
};
