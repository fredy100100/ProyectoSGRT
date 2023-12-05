// import { Main } from "../Main"
import { Menu } from '../shared/menu/menu';
import { Section } from '../Section';
import './usuarios.css'
// import Table from 'react-bootstrap/Table';
import { Header } from "../Home/Header";
import { Table } from "../shared/table/table";

export const Usuarios = () => {
  return (
    /*hola*/
    <div className="users-container">

      {/* <Main /> */}
      <Menu/>

      <div className="layout-container">
        <div className="head-content">
          <div className="header-container">
            <Header />
          </div>
          <Section />
        </div>
        <div className="table-content">
          <Table />
        </div>
        {/* <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              {Array.from({ length: 12 }).map((_, index) => (
                <th key={index}>Table heading</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
            <tr>
              <td>2</td>
              {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
            <tr>
              <td>3</td>
              {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
          </tbody>
        </Table> */}

      </div>

    </div>




  )
}