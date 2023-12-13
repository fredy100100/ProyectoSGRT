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
import { Form } from "./shared/Form/Form";
import { tipoactivo } from './InventarioX/tipoactivo';
import { useForm } from "react-hook-form";

export const Inventario = () => {
  const [estadoModal1, cambiarEstadoModal1] = useState(false);

  const { register, handleSubmit, formState: { errors }, watch, setValue, reset } = useForm()

  const onSubmit = handleSubmit((data) => {
    console.log(data);

    reset();
  })

  return (
    <div className="Inv">
      <Main />
      <BotonX onClick={() => cambiarEstadoModal1(!estadoModal1)}>Agregar Activo</BotonX>
      <ModalX estado={estadoModal1}
        cambiarEstado={cambiarEstadoModal1}
        titulo="Agregar Activo" >
        <Contenido>
          <>
          
          </>
          <Form onSubmit={onSubmit}>
            <SelectX options={tipoactivo} nombre="tipoactivo" {...register}>
              Tipo
            </SelectX>
            <InputX type={"text"} nombre="serialactivo" {...register("serialactivo",
              {
                required: { value: true, message: "Ingrese el serial del activo" }
              })}>
              Serial
            </InputX>
            <SelectX options={mock} nombre="marcaactivo" {...register("marcaactivo",
              {
                required: { value: true, message: "Seleccione la marca del activo" }
              })}>
              Marca
            </SelectX>
            <InputX type={"text"} nombre="modeloactivo" {...register("modeloactivo",
              {
                required: { value: true, message: "Ingrese el modelo del activo" }
              })}>
              Modelo
            </InputX>
            <BotonX type="submit">Agregar Activo</BotonX>
          </Form>
        </Contenido>
        <pre>{JSON.stringify(watch(), null, 2)}</pre>
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
