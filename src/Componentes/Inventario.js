import React, { useState } from "react";
import { Main } from "./Main";
import { Section } from "./Section";
import { ModalX } from "./shared/ModalX/ModalX";
import styled from "styled-components";
import { BotonX } from "./shared/BotonX/BotonX";
import "./inventario.css"

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
          <div className="Columns-container">
            <div className="Column1-container">
              <div className="TipoActivo-select-container">
                <h5>Tipo de Activo:</h5>
                <select className="TipoActivo-select">
                  <option className="TipoActivo-option">Seleccione Tipo de Activo</option>
                  <option className="TipoActivo-option" value="1">Teclado</option>
                  <option className="TipoActivo-option" value="2">Mouse</option>
                  <option className="TipoActivo-option" value="3">Monitor</option>
                  <option className="TipoActivo-option" value="4">Portatil</option>
                </select>
              </div>
              <div className="SerialActivo-input-container">
                <h5>Serial:</h5>
                <input className="SerialActivo-input" placeholder="Ingrese Serial"></input>
              </div>
            </div>
            <div className="Column2-container">
              <div className="MarcaActivo-select-container">
                <h5>Marca de Activo:</h5>
                <select className="MarcaActivo-select">
                  <option className="MarcaActivo-option">Seleccione Marca de Activo</option>
                  <option className="MarcaActivo-option" value="1">Samsung</option>
                  <option className="MarcaActivo-option" value="2">Lenovo</option>
                  <option className="MarcaActivo-option" value="3">HP</option>
                  <option className="MarcaActivo-option" value="4">Dell</option>
                </select>
              </div>
              <div className="ModeloActivo-input-container">
                <h5>Modelo:</h5>
                <input className="ModeloActivo-input" placeholder="Ingrese Modelo"></input>
              </div>
            </div>
          </div>

          <div className="ObservacionActivo-input-container">
            <h5>Observaciones:</h5>
            <input className="ObservacionActivo-input-container" type="text" placeholder="Observaciones..."></input>
          </div>
        </Contenido>
        <Boton>Agregar Activo</Boton>
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

  .ObservacionActivo-input-container {
    align-items: first baseline;
  }

  input {
    border-radius: 10px;
    border: none;
    box-shadow: 10px 11px 12px -8px rgba(0,0,0,0.75);
  }

  select {
    border-radius: 10px;
    border: none;
    box-shadow: 10px 11px 12px -8px rgba(0,0,0,0.75);
  }
  .TipoActivo-select-container {
    margin-bottom: 20px;
  }

  .MarcaActivo-select-container {
    margin-bottom: 20px;
  }

`;
