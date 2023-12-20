import { Main } from "./Main";
import { Section } from "./Section";
import { headTableActivos, Mockprueba} from "./InventarioX/mock";
import { Header } from "./Home/Header";
import { Table } from "./shared/table/table";
import { CrearActivo } from "./InventarioX/crearactivo";
import "./inventario.css";

export const Inventario = () => {

  return (
    <div className="Inv">
      <Main />
      <div className="layout-inv-container">
        <div className="head-inv-container">
          <div className="header-inv-container">
            <Header />
          </div>
          <CrearActivo />
          <Section />
        </div>
        <div className="table-content">
          <Table headTable={headTableActivos} dataTable={Mockprueba} />
        </div>
      </div>
    </div>
  );
};
