import { React, useEffect, useState } from 'react';
import { BotonX } from '../../shared/BotonX/BotonX';
import { Form } from '../../shared/Form/Form';
import { ModalX } from '../../shared/ModalX/ModalX';
import { useForm } from 'react-hook-form';
import { InputX } from '../../shared/Input/InputX';
import { SelectX } from '../../shared/SelectX/SelectX';
import axios from 'axios';

const ModificarPersona = ({user}) => {
  
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
    mode: "onChange",
    defaultValues: {
      pnom: user.pnom,
      snom: user.snom,
      pape: user.pape,
      sape: user.sape,
      correo: user.correo,
      celular: user.celular,
      idrol: user.idrol,
      idcargo: user.idcargo,
      iddoc: user.iddoc,
      estado: user.estado     
    },
  });


  return (
      <div className='formContainer16'>
        <Form onSubmit={onsubmit} autoComplete='off'> 
          <pre>{JSON.stringify(watch(), null, 2)}</pre>
        </Form>
      </div>
  )
}

export default ModificarPersona
