import { Main } from "../Main";
import { Section } from "../Section";
import "./usuarios.css";
import { Header } from "../Home/Header";
import { Table } from "../shared/table/table";
import { headTableUsuarios, mock } from "./mock"

export const Usuarios = () => {
  return (
    <div className="users-container">
      <Main />
      <div className="layout-container">
        <div className="head-content">
          <div className="header-container">
            <Header />
          </div>
          <Section />
        </div>
        <div className="table-content">
          <Table headTable={headTableUsuarios} dataTable={mock} />
        </div>
      </div>
    </div>
  );
};
