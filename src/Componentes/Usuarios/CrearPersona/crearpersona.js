import React, { useState } from "react";
import { ModalX } from "../../shared/ModalX/ModalX";
import { SelectX } from "../../shared/SelectX/SelectX";
import { InputX } from "../../shared/Input/InputX";
import { tipoIdentificacion, rol } from "../mock";
import { BotonX } from "../../shared/BotonX/BotonX";
import { Form } from "../../shared/Form/Form";
import { useForm } from "react-hook-form"
import styled from "styled-components";
import './crearpersona.css'

export const CrearPersona = () => {

    const [estadoModal1, cambiarEstadoModal1] = useState(false);

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

    return (
        <>
            <BotonX onClick={() => cambiarEstadoModal1(!estadoModal1)}>Agregar Usuario</BotonX>
            <ModalX
                estado={estadoModal1}
                cambiarEstado={cambiarEstadoModal1}
                titulo="Agregar Usuario">
                <Contenido>
                    <Form onSubmit={onSubmit}>
                        <div className="inputs-container">
                            <div className="input1-container">
                            <SelectX
                                className="select-container"
                                options={tipoIdentificacion}
                                name="tipoIdentificacion"
                                register={register}
                                setValue={setValue}
                                required={{
                                    value: true,
                                    message: "Selecciona el tipo de documento por favor",
                                }} >
                                Tipo de Doc.
                            </SelectX>
                            {
                                errors.tipoIdentificacion && <span>{errors.tipoIdentificacion.message}</span>
                            }
                            </div>
                            <div className="input1-container">
                            <InputX
                                type="number"
                                nombre="numeroIdenticacion"
                                register={register}
                                required={{
                                    value: true,
                                    message: "Ingresa el numero del documento por favor",
                                }}
                            >
                                Numero de Identificación
                            </InputX>
                            {
                                errors.numeroIdenticacion && <span>{errors.numeroIdenticacion.message}</span>
                            }
                        </div>
                            </div>
                        <div className="inputs-container">
                            <div className="input1-container">
                            <InputX
                                type="text"
                                nombre="primerNombre"
                                register={register}
                                required={{
                                    value: true,
                                    message: "Ingresa el nombre por favor",
                                }}
                            >
                                Primer Nombre
                            </InputX>
                            {
                                errors.primerNombre && <span>{errors.primerNombre.message}</span>
                            }
                            </div>
                            
                            <InputX
                                type="text"
                                nombre="segundoNombre"
                                register={register}
                            >
                                Segundo Nombre
                            </InputX>
                        </div>
                        <div className="inputs-container">
                            <div className="input1-container">
                            <InputX
                                type="text"
                                nombre="primerApellido"
                                register={register}
                                required={{
                                    value: true,
                                    message: "Ingresa el apellido por favor",
                                }}
                            >
                                Primer Apellido
                            </InputX>
                            {
                                errors.primerApellido && <span>{errors.primerApellido.message}</span>
                            }
                            </div>
                            
                            <InputX
                                type="text"
                                nombre="segundoApellido"
                                register={register}
                            >
                                Segundo Apellido
                            </InputX>
                        </div>
                        <InputX
                            type="email"
                            nombre="correo"
                            register={register}
                            required={{
                                value: true,
                                message: "Ingresa el correo electronico por favor",
                            }}
                        >
                            Correo Electronico
                        </InputX>
                        {
                            errors.correo && <span>{errors.correo.message}</span>
                        }
                        <div className="inputs-container">
                            <InputX
                                type="number"
                                nombre="numeroCelular"
                                register={register}
                            >
                                Celular
                            </InputX>
                            <div className="input1-container">
                            <SelectX
                                className="select-container"
                                options={rol}
                                name="tipoRol"
                                register={register}
                                setValue={setValue}
                                required={{
                                    value: true,
                                    message: "Selecciona el Rol por favor",
                                }} >
                                Rol
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
                            type="submit">Agregar Usuario</BotonX>
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