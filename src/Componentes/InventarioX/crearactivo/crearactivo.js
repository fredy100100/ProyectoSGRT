import React, { useState } from "react";
import { ModalX } from "../../shared/ModalX/ModalX"
import { SelectX } from "../../shared/SelectX/SelectX";
import { InputX } from "../../shared/Input/InputX";
import { marcaactivo, tipoactivo} from "../mock";
import { BotonX } from "../../shared/BotonX/BotonX";
import { Form } from "../../shared/Form/Form";
import { useForm } from "react-hook-form"
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";

export const CrearActivo = () => {

    const[lisTipoact, setlistTipoact]=useState([])
    const[listMarcact, setlisMarcact]=useState([])
    useEffect(() =>{
        const Tipoact=async() =>{
            const inofTipoact=await axios.get("http://localhost:8080/tiposacts")
            const info=inofTipoact.data.map(item => ({value: item.idtipo,label: item.nombre}));
            setlistTipoact(info)
        }
    Tipoact()
        const Marcaact=async() => {
            const infoMarcact= await axios.get("http://localhost:8080/marcasact")
            const info = infoMarcact.data.map(item => ({value: item.idmarca, label: item.nombre})); 
            setlisMarcact(info)
}
Marcaact()
}, []);

    const [estadoModal1, cambiarEstadoModal1] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm({
        mode: "onChange",
        defaultValues: {},
    });

    const onSubmit = handleSubmit((data) => {
        const createUser = async (activo) => {
            const infoUser = await axios.post('http://localhost:8080/add_act', activo)
            alert("Activo Creado")
            cambiarEstadoModal1(!estadoModal1)               
    }
    createUser(data)

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
                <Form onSubmit={onSubmit} autocomplete="off">
                    <SelectX
                        options={lisTipoact}
                        name="idtipo"
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
                        nombre="idserial"
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
                        options={listMarcact}
                        name="idmarca"
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
                        nombre="modelo"
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
                    {/* <pre>{JSON.stringify(watch(), null,2)}</pre> */}
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