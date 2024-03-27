import { React, useEffect, useState } from 'react';
import { BotonX } from '../../shared/BotonX/BotonX';
import { Form } from '../../shared/Form/Form';
import { ModalX } from '../../shared/ModalX/ModalX';
import { useForm } from 'react-hook-form';
import { InputX } from '../../shared/Input/InputX';
import { SelectX } from '../../shared/SelectX/SelectX';
import axios from 'axios';
import './ModificarPersona.css';

const ModificarPersona = ({ user }) => {

  const [cargosData, setCargosData] = useState({})
  const [tiposDocData, setTiposDocData] = useState([])
  const [sedes, setSedes] = useState({})
  const [roles, setRoles] = useState({})

  useEffect(() => {

    // LISTAR CARGOS
    const listCargos = async () => {
      const cargos = await axios.get('http://localhost:8080/cargos')
      const infoCargos = cargos.data.map(item => ({
        value: item.idcargo,
        label: item.nombre
      }))
      setCargosData(infoCargos)
    }
    listCargos()

    // LISTAR TIPOSDOC
    const listTiposDoc = async () => {
      const tiposDoc = await axios.get('http://localhost:8080/tiposdoc')
      const infotiposDoc = tiposDoc.data.map(item => ({
        value: item.iddoc,
        label: item.tipo
      }))
      setTiposDocData(infotiposDoc)
    }
    listTiposDoc()

    //LISTAR SEDES
    const listSedes = async () => {
      const sede = await axios.get('http://localhost:8080/sedes')
      const infoSedes = sede.data.map(item => ({
        value: item.idsede,
        label: item.nombre
      }))
      setSedes(infoSedes)
    }
    listSedes()

    //LISTAR ROL
    const listRoles = async () => {
      const rol = await axios.get('http://localhost:8080/roles')
      const infoRol = rol.data.map(item => ({
        value: item.idrol,
        label: item.nombre
      }))
      setRoles(infoRol)
    }
    listRoles()

  }, [])

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
    mode: "onChange",
    defaultValues: {
      nodoc: user.nodoc,
      pnom: user.pnom,
      snom: user.snom,
      pape: user.pape,
      sape: user.sape,
      correo: user.correo,
      celular: user.celular,
      idrol: user.idrol,
      idcargo: user.idcargo,
      iddoc: user.iddoc,
      idsede: user.idsede,
      estado: user.estado === 'Activo' ? true : false,
      pass: user.pass
    },
  });

  const onsubmit = handleSubmit((data) =>{
    const editUser = async (usuario) => {
      const editar = await axios.put(`http://localhost:8080/edituser/${user.nodoc}`, usuario)
      alert(editar.data)
    }
    editUser(data)
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
          <div className="input1-container">
            <InputX
              type="text"
              nombre="nodoc"
              register={register}
              required={{
                value: true,
                message: "Ingresa el numero por favor",
              }}
              pattern={{
                value: /^\d*$/,
                message: "Ingrese solo numeros"
              }}
              minLength={{
                value: 7,
                message: "Debe tener mas de 7 caracteres"
              }}
              maxLength={{
                value: 10,
                message: "No puede ser mayor a 10 caracteres"
              }}
              disabled={true}>
              Numero de Identificación
            </InputX>
            {
              errors.nodoc && <span>{errors.nodoc.message}</span>
            }
          </div>
        </div>
        <div className="inputs-container">
          <div className="input1-container">
            <InputX
              type="text"
              nombre="pnom"
              register={register}
              required={{
                value: true,
                message: "Ingresa el nombre por favor",
              }}
            >
              Primer Nombre
            </InputX>
            {
              errors.pnom && <span>{errors.pnom.message}</span>
            }
          </div>

          <InputX
            type="text"
            nombre="snom"
            register={register}
          >
            Segundo Nombre
          </InputX>
        </div>
        <div className="inputs-container">
          <div className="input1-container">
            <InputX
              type="text"
              nombre="pape"
              register={register}
              required={{
                value: true,
                message: "Ingresa el apellido por favor",
              }}
            >
              Primer Apellido
            </InputX>
            {
              errors.pape && <span>{errors.pape.message}</span>
            }
          </div>

          <InputX
            type="text"
            nombre="sape"
            register={register}
          >
            Segundo Apellido
          </InputX>
        </div>
        <div className="inputs-container">
          <div className="input1-container">
            <SelectX
              options={cargosData}
              name="idcargo"
              register={register}
              setValue={setValue}
              defaultValue={{ label: user.idcargo, value: user.idcargo }}
              required={{
                value: true,
                message: "Selecciona el cargo por favor",
              }} >
              Cargo
            </SelectX>
            {
              errors.idcargo && <span>{errors.idcargo.message}</span>
            }
          </div>

          <div className="input1-container">
            <SelectX
              options={roles}
              name="idrol"
              register={register}
              setValue={setValue}
              defaultValue={{ label: user.idrol, value: user.idrol }}
              required={{
                value: true,
                message: "Selecciona el Rol por favor",
              }} >
              Rol
            </SelectX>
            {
              errors.idrol && <span>{errors.idrol.message}</span>
            }
          </div>
        </div>

        <div className="inputs-container">
          <div className="input1-container">
            <SelectX
              options={sedes}
              name="idsede"
              register={register}
              setValue={setValue}
              defaultValue={{ label: user.idsede, value: user.idsede}}
              required={{
                value: true,
                message: "Selecciona la sede por favor",
              }} >
              Sede
            </SelectX>
            {
              errors.idsede && <span>{errors.idsede.message}</span>
            }
          </div>
          <div className="input1-container">
            <InputX
              type="text"
              nombre="celular"
              register={register}
              setValue={setValue}
              pattern={{
                value: /^\d*$/,
                message: "Ingrese solo numeros"
              }}
              minLength={{
                value: 10,
                message: "Debe tener mas de 10 caracteres"
              }}
              maxLength={{
                value: 10,
                message: "No puede ser mayor a 10 caracteres"
              }}
            >
              Celular
            </InputX>
            {
              errors.celular && <span>{errors.celular.message}</span>
            }
          </div>
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
        <div className='inputs-container'>
          <div className='input1-container'>
            <InputX
              type="password"
              nombre="pass"
              register={register}
              setValue={setValue}>
              Restablecer contraseña
            </InputX>
          </div>
          <div className='checkboxEstado'>
            <p>Activo</p>
            <InputX
              type="checkbox"
              nombre="estado"
              register={register}
              setValue={setValue}
              style={{width: '20px'}}>
            </InputX>
          </div>
          
        </div>
        <div className='bottonModificarUser'>
        <BotonX
          type="submit">Guardar cambios
        </BotonX>
        </div>
       
        {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
      </Form>
    </div>
  )
}

export default ModificarPersona
