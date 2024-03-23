import React, { useEffect, useState } from "react";
import { ModalX } from "../../shared/ModalX/ModalX";
import { InputX } from "../../shared/Input/InputX";
import { BotonX } from "../../shared/BotonX/BotonX";
import { Form } from "../../shared/Form/Form";
import { useForm } from "react-hook-form"
import styled from "styled-components";
import {SelectX} from "../../shared/SelectX/SelectX"
import axios from "axios";

export const CrearSolicitud = () => {

    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    const [categorias, setCategorias] = useState({})

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
        mode: "onChange",
        defaultValues: {
            password: "Colombia2023."
        },
    });

    const onSubmit = handleSubmit((data) => {
        console.log(data);

        reset();
    });

    useEffect(() => {
        const listCategorias = async () => {
            const categoria = await axios.get('http://localhost:8080/categorias')
            const infoCategorias = categoria.data.map(item => ({
                value: item.idcat,
                label: item.nombre
            }))
            setCategorias(infoCategorias)
        }
        listCategorias()
    } ,[])
  

    return (
        <>
            <BotonX onClick={() => cambiarEstadoModal1(!estadoModal1)}>Generar solicitud</BotonX>
            <ModalX
                estado={estadoModal1}
                cambiarEstado={cambiarEstadoModal1}
                titulo="Generar Solicitud">
                <Contenido>
                    <Form onSubmit={onSubmit} autocomplete="off">
                        <div className="inputs-container">
                        
                            <div className="input1-container">
                                <InputX
                                    type="text"
                                    nombre="Observacion"
                                    register={register}
                                    required={{
                                        value: true,
                                        message: "Ingrese la observacion",
                                    }}
                                >
                                    Observacion
                                </InputX>
                                {
                                    errors.Observacion && <span>{errors.Observacion.message}</span>
                                }
                            </div>
    
                            <div className="input1-container">
                                <SelectX
                                    className="select-container"
                                    options={categorias}
                                    name="tipoRol"
                                    register={register}
                                    setValue={setValue}
                                    required={{
                                        value: true,
                                        message: "Selecciona la categoria",
                                    }} >
                                    Categoria
                                </SelectX>
                                {
                                    errors.tipoRol && <span>{errors.tipoRol.message}</span>
                                }
                            </div>
                        </div>
                        
                        <InputX
                            type="hidden"
                            nombre="password"
                            register={register}
                            setValue={setValue}>
                        </InputX>
                        <BotonX
                            type="submit">Generar Solicitud</BotonX>
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