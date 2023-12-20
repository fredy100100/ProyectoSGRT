import React, { useState } from "react";
import { ModalX } from "../shared/ModalX/ModalX";
import { SelectX } from "../shared/SelectX/SelectX";
import { InputX } from "../shared/Input/InputX";
import { marcaactivo, tipoactivo} from "./mock";
import { BotonX } from "../shared/BotonX/BotonX";
import { Form } from "../shared/Form/Form";
import { useForm } from "react-hook-form"
import styled from "styled-components";

export const CrearActivo = () => {

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
        <>
        <BotonX  onClick={() => cambiarEstadoModal1(!estadoModal1)}>Agregar Activo</BotonX>
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
        </>
    )
}

const Contenido = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px;
`;