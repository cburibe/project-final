import React from "react";
import {
  Label,
  GrupoInput,
  Input,
  TextError,
} from "../pages/elementos/formulario";

const ComponenteInput = ({
  estado,
  cambiarEstado,
  tipo,
  name,
  textError,
  expresionRegular,
  label,
  placeholder,
}) => {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <GrupoInput>
        <Input value={estado} type={tipo} id={name} placeholder={placeholder} />
      </GrupoInput>
      <TextError>{textError}</TextError>
    </div>
  );
};
export default ComponenteInput;
