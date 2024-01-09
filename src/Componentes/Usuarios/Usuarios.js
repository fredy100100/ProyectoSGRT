import { Section } from "../Section";
import "./usuarios.css";
import { Header } from "../shared/Header/Header"
import { columns } from "./mock"
import { CrearPersona } from "./CrearPersona/crearpersona";
import { SimpleTable } from "../shared/simpleTable/simpleTable";
import { BotonesNav } from "../shared/tablenavegation/botonesNav";
import data from './MOCK_DATA.json'
import { InputTable } from "../shared/inputTable/inputTable";

export const Usuarios = () => {
  return (

    <SimpleTable columns={columns} data={data} navegacion={<BotonesNav />} titulo="Usuarios">
      <div className="header-users">
        <InputTable />
        <CrearPersona />        
        <Section />
      </div>
    </SimpleTable>
    // <div className="users-container">
    //   <div className="layout-users-container">
    //     <div className="head-users-container">
    //       <div className="header-users-container">
    //         <CrearPersona />
    //         <Section></Section>
    //       </div>

    //     </div>
    //     <div className="table-content">
    //       <SimpleTable filtro={<InputTable />} navegacion={<BotonesNav />} columns={columns} data={data} titulo="Usuarios">
    //       </SimpleTable>
    //     </div>
    //   </div>
    // </div>
  );
};
