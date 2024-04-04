import { Main } from "../Main";
import { Section } from "../Section";
import { headTableActivos } from "./mock";
import data from "./MOCK_DATA.json";
import { Header } from "../shared/Header/Header"
import { CrearActivo } from "./crearactivo/crearactivo";
import "./inventario.css";
import { SimpleTable } from "../shared/simpleTable/simpleTable";
import { InputTable } from '../shared/inputTable/inputTable';
import { BotonesNav } from "../shared/tablenavegation/botonesNav";
import { useEffect, useState } from "react";
import axios from "axios";

export const Inventario = () => {

  const [listActivos, setlistActivos]=useState([])
  useEffect(() =>{
    const activos=async () => {
      const infoactivos=await axios.get("http://localhost:8080/acts")
      const info=infoactivos.data;
      setlistActivos(info)
  }
  activos()},[])

  return (
    <div className="Inv">
      <div className="layout-inv-container">
        <div className="head-inv-container">
          <div className="header-inv-container">
            {/* <Header nombre="inventario" /> */}
            <CrearActivo />
            <Section />
          </div>

        </div>
        <div className="table-content">
          <SimpleTable filtro={<InputTable />} navegacion={<BotonesNav />} columns={headTableActivos} data={listActivos} titulo="Activos" >
          </SimpleTable>
        </div>
      </div>
    </div>
  );
};
