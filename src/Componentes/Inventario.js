import React, { useState } from "react";
import { Main } from "./Main";
import { Section } from "./Section";
import { ModalX } from "./shared/ModalX/ModalX";
import styled from "styled-components";
import { BotonX } from "./shared/BotonX/BotonX";
import "./inventario.css"
import { InputX } from "./shared/Input/InputX";
import { SelectX } from "./shared/SelectX/SelectX";
import { mock } from "./InventarioX/mock";
import { tipoactivo } from "./InventarioX/tipoactivo"
import { Form } from "./shared/Form/Form";
import { useForm } from "react-hook-form";

export const Inventario = () => {
  const [estadoModal1, cambiarEstadoModal1] = useState(false);

  // const { register, handleSubmit, formState: { errors }, watch, setValue, reset} = useForm()

  // const onSubmit = handleSubmit((data) => {
  //   console.log(data);
  // })
  
  return (
    <div className="Inv">
      <Main />
      <BotonX onClick={() => cambiarEstadoModal1(!estadoModal1)}>Agregar Activo</BotonX>
      <ModalX estado={estadoModal1}
        cambiarEstado={cambiarEstadoModal1}
        titulo="Agregar Activo" >
        <Contenido>
          <Form >
            <SelectX options={tipoactivo} >Tipo</SelectX>
            <InputX type={"text"} >Serial</InputX>
            <SelectX options={mock} >Marca</SelectX>
            <InputX type={"text"} >Modelo</InputX>
            <BotonX>Agregar Activo</BotonX>
          </Form>
        </Contenido>
        
      </ModalX>
      <Section />
    </div>
  );
};

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px;
`;
