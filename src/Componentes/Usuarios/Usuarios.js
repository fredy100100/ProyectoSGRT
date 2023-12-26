import { Main } from "../Main";
import { Section } from "../Section";
import "./usuarios.css";
import { Header } from "../shared/Header/Header"
import { columns } from "./mock"
import { CrearPersona } from "./CrearPersona/crearpersona";
import { SimpleTable } from "../shared/simpleTable/simpleTable";
import data from './MOCK_DATA.json'

export const Usuarios = () => {
  return (
    <div className="users-container">
      <Main />
      <div className="layout-container">
        <div className="head-content">
          <div className="header-container">
            <Header />
          </div>
          <CrearPersona></CrearPersona>
          <Section />
        </div>
        <div className="table-content">
          <SimpleTable columns={columns} data={data} titulo="Usuarios"></SimpleTable>
        </div>
      </div>
    </div>
  );
};
