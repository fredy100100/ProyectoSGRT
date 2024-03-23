import '../../Iconos.css';
import { Main } from '../Main';
import { Section } from '../Section';
import { SimpleTable } from '../shared/simpleTable/simpleTable';
import { InputTable } from '../shared/inputTable/inputTable';
import { BotonesNav } from "../shared/tablenavegation/botonesNav";
import { columns } from './mockhome';
import axios from "axios"
import { React, useState, useEffect} from 'react'

import './Homex.css'

export const Home = () => {
  const [isData, setIsData] = useState({})
  useEffect(() => {

    const datos = async () => {
      const resp = await axios.get('http://localhost:8080/solicitudes')
      const info = resp.data
      return setIsData(info)
    }
    datos()

  }, [])
  return (
    <div className="home-container">
      <div className='layout-home-container'>
        <div className='head-home-container'>
          <div className='header-home-container'>
          </div>
        </div>
        <SimpleTable filtro={<InputTable />} navegacion={<BotonesNav />} columns={columns} data={isData} titulo="Requerimientos" />
      </div>
    </div>

  );
}