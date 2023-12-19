import React, { useState } from "react";
import { Main } from "./Main";
import { Section } from "./Section";
import { ModalX } from "./shared/ModalX/ModalX";
import styled from "styled-components";
import { BotonX } from "./shared/BotonX/BotonX";
import "./inventario.css";
import { InputX } from "./shared/Input/InputX";
import { SelectX } from "./shared/SelectX/SelectX";
import { headTableActivos, Mockprueba, marcaactivo, tipoactivo } from "./InventarioX/mock";
import { Form } from "./shared/Form/Form";
import { useForm } from "react-hook-form";
import { Header } from "./Home/Header";
import { Table } from "./shared/table/table";

export const Inventario = () => {
  const [estadoModal1, cambiarEstadoModal1] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
    mode: "onChange",
    defaultValues: {},
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);

    reset();
  });

  return (
    <div className="Inv">
      <Main />
      <div className="layout-inv-container">
        <div className="head-inv-container">
          <div className="header-inv-container">
            <Header />
          </div>
          <ModalX
            estado={estadoModal1}
            cambiarEstado={cambiarEstadoModal1}
            titulo="Agregar Activo"
          >
            <Contenido>
              <Form onSubmit={onSubmit}>
                <SelectX
                  options={tipoactivo}
                  name="tipoactivo"
                  register={register}
                  setValue={setValue}
                  required={{
                    value: true,
                    message: "Selecciona el tipo por favor",
                  }}
                >
                  Tipo
                </SelectX>
                {
                  errors.tipoactivo && <span>{errors.tipoactivo.message}</span>
                }
                <InputX
                  type={"text"}
                  nombre="serialactivo"
                  register={register}
                  required={{
                    value: true,
                    message: "Ingresa el serial por favor",
                  }}
                >
                  Serial
                </InputX>
                {
                  errors.serialactivo && <span>{errors.serialactivo.message}</span>
                }
                <SelectX
                  options={marcaactivo}
                  name="marcaactivo"
                  register={register}
                  setValue={setValue}
                  required={{
                    value: true,
                    message: "Selecciona la Marca por favor",
                  }}
                >
                  Marca
                </SelectX>
                {
                  errors.marcaactivo && <span>{errors.marcaactivo.message}</span>
                }
                <InputX
                  type={"text"}
                  nombre="modeloactivo"
                  register={register}
                  required={{
                    value: true,
                    message: "Ingresa el modelo por favor",
                  }}
                >
                  Modelo
                </InputX>
                {
                  errors.modeloactivo && <span>{errors.modeloactivo.message}</span>
                }
                <div className="boton-agregar">
                <BotonX type="submit">Agregar Activo</BotonX>
                </div>
              </Form>
            </Contenido>
          </ModalX>
          <BotonX  onClick={() => cambiarEstadoModal1(!estadoModal1)}>Agregar Activo</BotonX>
          <Section />
        </div>
        <div className="table-content">
          <Table headTable={headTableActivos} dataTable={Mockprueba} />
        </div>
      </div>
    </div>
  );
};

const Contenido = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px;
`;
