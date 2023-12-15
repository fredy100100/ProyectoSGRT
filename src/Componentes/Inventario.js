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
import { useForm, FormProvider } from "react-hook-form"

export const Inventario = () => {
  const [estadoModal1, cambiarEstadoModal1] = useState(false);

  const methods = useForm();

  const { register, handleSubmit, watch, reset} = methods;

  const onSubmit = handleSubmit((data) => {
    console.log(data);

    reset()
  })

  return (
    <FormProvider {...methods}>
    <div className="Inv">
      <Main />
      <BotonX onClick={() => cambiarEstadoModal1(!estadoModal1)}>Agregar Activo</BotonX>
      <ModalX estado={estadoModal1}
        cambiarEstado={cambiarEstadoModal1}
        titulo="Agregar Activo" >
        <Contenido>
          <Form onSubmit ={onSubmit}>
            <SelectX options={tipoactivo} nombre="tipoactivo" required={{ value: true, message: "Selecciona el tipo por favor"}}>
              Tipo
            </SelectX>
            <InputX type={"text"} nombre="serialactivo" register={register} required={{ value: true, message: "Ingresa el serial por favor"}}>
              Serial
            </InputX>
            <SelectX options={mock} nombre="marcaactivo" required={{ value: true, message: "Selecciona la Marca por favor"}}>
              Marca
            </SelectX>
            <InputX type={"text"} nombre="modeloactivo" register={register} required={{ value: true, message: "Ingresa el modelo por favor"}}>
              Modelo
            </InputX>
            <BotonX type="submit">Agregar Activo</BotonX>
            <pre>{JSON.stringify(watch(), null, 2)}</pre>
          </Form>
        </Contenido>
      </ModalX>
      <Section />
    </div>
    </FormProvider>
  );
};

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px;
`;
