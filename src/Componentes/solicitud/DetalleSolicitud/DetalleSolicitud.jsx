import { React, useEffect, useState } from 'react';
import { BotonX } from '../../shared/BotonX/BotonX';
import { Form } from '../../shared/Form/Form';
import { ModalX } from '../../shared/ModalX/ModalX';
import { useForm } from 'react-hook-form';
import { InputX } from '../../shared/Input/InputX';
import { SelectX } from '../../shared/SelectX/SelectX';
import axios from 'axios';

const DetalleSolicitud = ({solicitud}) => {

    const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
        mode: "onChange",
        defaultValues: {
            idsol: solicitud.idsol,
            fechacre: solicitud.fechacre,
            fechaci: solicitud.fechaci,
            prio: solicitud.prio,
            obser: solicitud.obser,
            diag: solicitud.diag,
            idest: solicitud.idest,
            nodoccliente: solicitud.nodoccliente,
            nodoctecnico: solicitud.nodoctecnico,
            idcat: solicitud.idcat,
        },

    const onsubmit = handleSubmit((data) =>{
        const detalle = async (solicitud) => {
          const editar = await axios.put(`http://localhost:8080//solicitudid/${solicitud.idsol}`, solicitud)
        }
        detalle (data)
      })

      return (
    
        <div className='formContainer16'>
      <Form onSubmit={onsubmit} autoComplete='off'>
        <div className="inputs-container">
          <div className="input1-container">
            <SelectX
              options={tiposDocData}
              name="iddoc"
              register={register}
              setValue={setValue}
              defaultValue={{ label: user.iddoc, value: user.iddoc }}
              required={{
                value: true,
                message: "Selecciona el tipo de documento por favor",
              }}
            >
              Tipo de Doc.
            </SelectX>
            {
              errors.iddoc && <span>{errors.iddoc.message}</span>
            }
          </div>
          </div>

      )
}