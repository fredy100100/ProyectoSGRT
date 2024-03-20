import { Section } from "../Section";
import { headTableActivos } from "./mock";
import data from "./MOCK_DATA.json";
import { CrearActivo } from "./crearactivo/crearactivo";
import "./inventario.css";
import { SimpleTable } from "../shared/simpleTable/simpleTable";
import { InputTable } from '../shared/inputTable/inputTable';

export const Inventario = () => {

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
          <SimpleTable filtro={<InputTable />} columns={headTableActivos} data={data} titulo="Activos" >
          </SimpleTable>
        </div>
      </div>
    </div>
  );
};
