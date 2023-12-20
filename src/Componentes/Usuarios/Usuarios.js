import { Main } from "../Main";
import { Section } from "../Section";
import "./usuarios.css";
import { Header } from "../Home/Header";
import { Table } from "../shared/table/table";
import { headTableUsuarios, Persona } from "./mock"
import { CrearPersona } from "./CrearPersona/crearpersona";

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
          <Table headTable={headTableUsuarios} dataTable={Persona} />
        </div>
      </div>
    </div>
  );
};
