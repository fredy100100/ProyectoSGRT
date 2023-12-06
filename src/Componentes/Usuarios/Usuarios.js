import { Main } from "../Main"
// import { Menu } from '../shared/menu/menu';
import { Section } from '../Section';
import './usuarios.css'
// import Table from 'react-bootstrap/Table';
import { Header } from "../Home/Header";
import { Table } from "../shared/table/table";
import { Agree } from "../shared/Agree/Agree";

export const Usuarios = () => {
  return (
    /*hola*/
    <div className="users-container">

      <Main />
      
      {/* <Menu/> */}

      <div className="layout-container">
        <div className="head-content">
          <div className="header-container">
            <Header />
          </div>
          <Agree></Agree>
          <Section />
        </div>
        <div className="table-content">
          <Table />
        </div>
        

      </div>

    </div>




  )
}