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

export const Inventario = () => {

  return (

    <SimpleTable columns={headTableActivos} data={data} navegacion={<BotonesNav />} titulo="Activos">
      <div className="header-inventario">
        <InputTable></InputTable>
        <CrearActivo></CrearActivo>
        <Section></Section>
      </div>
    </SimpleTable>
    // <div className="Inv">
    //   <div className="layout-inv-container">
    //     <div className="head-inv-container">
    //       <div className="header-inv-container">
    //         {/* <Header nombre="inventario" /> */}
    //         <CrearActivo />
    //         <Section />
    //       </div>

    //     </div>
    //     <div className="table-content">
    //       <SimpleTable navegacion={<BotonesNav />} columns={headTableActivos} data={data} titulo="Activos" >
    //       </SimpleTable>
    //     </div>
    //   </div>
    // </div>
  );
};
