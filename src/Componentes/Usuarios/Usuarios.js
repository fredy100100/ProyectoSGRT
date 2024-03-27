import { Section } from "../Section";
import "./usuarios.css";
import { columns } from "./mock"
import { CrearPersona } from "./CrearPersona/crearpersona";
import { SimpleTable } from "../shared/simpleTable/simpleTable";
import { InputTable } from "../shared/inputTable/inputTable";
import axios from 'axios';
import { React, useState, useEffect } from 'react'

export const Usuarios = () => {

  const [isData, setIsData] = useState([]);

  useEffect(() => {

    const datos = async () => {
      const resp = await axios.get('http://localhost:8080/users')
      const info = resp.data
      return setIsData(info)
    }
    datos()
  }, [])

  // CAMBIO LA INFORMACIÓN QUE SE VA A MOSTRAR EN LA COLUMNA ESTADO
  const data = isData.map(item => ({
    ...item,
    estado: item.estado ? 'Activo' : 'Inactivo'
 }))

  return (
    <div className="users-container">
      <div className="layout-users-container">
        <div className="head-users-container">
          <div className="header-users-container">
            <CrearPersona />
            <Section></Section>
          </div>

        </div>
        <div className="table-content">
          <SimpleTable 
            filtro={<InputTable />} 
            columns={columns} 
            data={data} 
            titulo="Usuarios" 
            buttonAction={{ value: true, action: "Modificar", titleModal: "Modificar Usuario" }}>
          </SimpleTable>
        </div>
      </div>
    </div>
  );
};
