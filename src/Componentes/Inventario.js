import { Main } from "./Main";
import { Section } from "./Section";
import { headTableActivos} from "./InventarioX/mock";
import data from "./InventarioX/MOCK_DATA.json";
import { Header } from "./shared/Header/Header"
import { CrearActivo } from "./InventarioX/crearactivo";
import "./inventario.css";
import { SimpleTable } from "./shared/simpleTable/simpleTable";

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
          <SimpleTable columns={headTableActivos} data={data} titulo="Activos" />
        </div>
      </div>
    </div>
  );
};
