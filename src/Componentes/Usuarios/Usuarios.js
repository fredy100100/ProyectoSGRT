import { Section } from "../Section";
import "./usuarios.css";
import { columns } from "./mock"
import { CrearPersona } from "./CrearPersona/crearpersona";
import { SimpleTable } from "../shared/simpleTable/simpleTable";
import { InputTable } from "../shared/inputTable/inputTable";
import axios from 'axios';
import { React, useState, useEffect} from 'react'

export const Usuarios = () => {

  const [isData, setIsData] = useState({})

  useEffect(() => {

    const datos = async () => {
      const resp = await axios.get('http://localhost:8080/users')
      const info = resp.data
      return setIsData(info)
    }
    datos()

  }, [])

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
          <SimpleTable filtro={<InputTable />} columns={columns} data={isData} titulo="Usuarios">
          </SimpleTable>
        </div>
      </div>
    </div>
  );
};
