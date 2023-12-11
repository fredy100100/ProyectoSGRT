import React, { useState } from "react";
import { Main } from "./Main";
import { Section } from "./Section";
import { ModalX } from "./shared/ModalX/ModalX";
import styled from "styled-components";
import { BotonX } from "./shared/BotonX/BotonX";
import "./inventario.css"
import { InputX } from "./shared/Input/InputX";

export const Inventario = () => {
  const [estadoModal1, cambiarEstadoModal1] = useState(false);
  return (
    <div className="Inv">
      <Main />
      <BotonX onClick={() => cambiarEstadoModal1(!estadoModal1)}>Agregar Activo</BotonX>
      <ModalX estado={estadoModal1}
        cambiarEstado={cambiarEstadoModal1}
        titulo="Agregar Activo" >
        <Contenido>
        <InputX>Serial</InputX>

        </Contenido>
        <Boton>Agregar Activo</Boton>
      </ModalX>
      <Section />
    </div>
  );
};

const Boton = styled.button`
  display: block;
  padding: 10px 30px;
  border-radius: 100px;
  color: #fff;
  border: none;
  background: #1766dc;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  transition: 0.3s ease all;
  height: fit-content;

  &:hover {
    background: #0066ff;
  }
`;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items:first baseline;
  gap: 20px;
  margin: 20px;

  h5 {
    font-size: 15px;
    font-weight: 700;
    margin: none;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }

  .Columns-container {
    display: flex;
    flex-direction: row;
    gap: 20px
  }
`;
