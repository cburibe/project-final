import React, { useState } from "react";
import {
  Formulario,
  Label,
  ConntenedorBotonCentrado,
  ContenedorTerminos,
  Boton,
  MensajeError,
  MensajeExito,
} from "./elementos/formulario";
import "../../styles/formulario.css";
import { FaExclamationCircle } from "react-icons/fa";
import Input from "../component/input";

export const FormRegistro = () => {
  const [nombre, cambiarNombre] = useState({ campo: "", valido: null });
  const [apellido, cambiarApellido] = useState({ campo: "", valido: null });
  const [password, cambiarPassword] = useState({ campo: "", valido: null });
  const [confpassword, cambiarConfpassword] = useState({
    campo: "",
    valido: null,
  });
  const [email, cambiarEmail] = useState({ campo: "", valido: null });
  const [usuario, cambiarUsuario] = useState({ campo: "", valido: null });
  const [fono, cambiarFono] = useState({ campo: "", valido: null });

  return (
    <main>
      <Formulario action="">
        <Input
          estado={nombre}
          cambiarEstado={cambiarNombre}
          tipo="text"
          name="name"
          textError="El nombre tiene que ser de 6 a 20 digitos y solo puede contener numeros, letras y guion bajo"
          label="Name"
          placeholder="Please enter your name"
          expresionRegular=""
        />
        <Input
          tipo="text"
          name="lastname"
          textError="El apellido tiene que ser de 6 a 20 digitos y solo puede contener numeros, letras y guion bajo"
          label="LastName"
          placeholder="Please enter your lastname"
          expresionRegular=""
        />
        <Input
          tipo="password"
          name="password"
          textError="contraseña incorrecta"
          label="Password"
          placeholder="Please enter your lastname"
          expresionRegular=""
        />

        <ContenedorTerminos>
          <Label>
            <input type="checkbox" name="terminos" id="terminos" />
            Acepto los Terminos y Condiciones
          </Label>
        </ContenedorTerminos>
        {false && (
          <MensajeError>
            <p>
              <FaExclamationCircle />
              <b>Error: </b>Por favor rellena el formulario correctamente.
            </p>
          </MensajeError>
        )}
        <ConntenedorBotonCentrado>
          <Boton type="submit">Ingresar</Boton>
          <MensajeExito>¡Registro éxitoso!</MensajeExito>
        </ConntenedorBotonCentrado>
      </Formulario>
    </main>
  );
};
