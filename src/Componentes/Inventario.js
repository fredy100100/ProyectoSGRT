import React, { useState } from "react";
import { Main } from "./Main";
import { Section } from "./Section";
import { ModalX } from "./shared/ModalX/ModalX";
import styled from "styled-components";

export const Inventario = () => {
  const [estadoModal1, cambiarEstadoModal1] = useState(false);

  return (
    <div className="Inv">
      <Main />
      <ContenedorBotones>
        <Boton onClick={() =>cambiarEstadoModal1(!estadoModal1)}>Modal 1</Boton>
      </ContenedorBotones>
      <ModalX estado={estadoModal1}
      cambiarEstado={cambiarEstadoModal1}>
        <Contenido>
          <h1>Ventana Modal</h1>
          <p>Reutilizable y con opciones de personalización.</p>
          <Boton onClick={() =>cambiarEstadoModal1(false)}>Aceptar</Boton>
        </Contenido>
      </ModalX>
      <Section />
    </div>
  );
};

const ContenedorBotones = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
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
  align-items: center;

  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
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
`;
