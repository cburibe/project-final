import styled from "styled-components";

const colores = {
  borde: "#A3E4D7 ",
  error: "bb2929",
  exito: "#1ed12d",
};

const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
const Label = styled.label`
  display: block;
  font-weight: 700;
  padding:40px;
  min-height:40px
  cursor: pointer;
`;
const GrupoInput = styled.div`
  position: relative;
  z-index: 90;
`;
const Input = styled.input`
  width: 100%;
  background: #fff;
  border-radius: 3px;
  height: 45px;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: 0.3s ease all;
  border: 3px solid transparent;

  &:focus {
    border: 3px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
`;
const TextError = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  color: ${colores.error};
  display: none;
`;
const ContenedorTerminos = styled.p`
  grid-column: span 2;

  input {
    margin-right: 10px;
  }
`;

const ConntenedorBotonCentrado = styled.div`
  display: flex;
  flex-direction: column;
  align- items: center;
  grid-column: span 2;
`;
const Boton = styled.button`
  height: 45px;
  line-heaight: 45px;
  width: 30%;
  background: #000;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.1s ease all;

  &:hover {
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
  }
`;

const MensajeExito = styled.p`
  font-size: 14px;
  color: ${colores.exito};
  display: none;
`;

const MensajeError = styled.div`
  height: 45px;
  line-height: 45px;
  background: #f6060;
  padding: 8px 15px;
  border-radius: 3px;
  grid-column: span 2;
  p {
    margin: 0;
  }
  b {
    margin-left: 10px;
  }
`;

export {
  Formulario,
  Label,
  GrupoInput,
  Input,
  TextError,
  ConntenedorBotonCentrado,
  ContenedorTerminos,
  Boton,
  MensajeExito,
  MensajeError,
};
