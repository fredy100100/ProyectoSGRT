import '../../Iconos.css';
import { Main } from '../Main';
import { Section } from '../Section';
import { SimpleTable } from '../shared/simpleTable/simpleTable';
import { InputTable } from '../shared/inputTable/inputTable';
import { BotonesNav } from "../shared/tablenavegation/botonesNav";
import data from './MOCK_DATA Requerimientos.json';
import { columns } from './mockhome';
import './Homex.css'

export const Home = () => {
  return (

    <SimpleTable className="table-home" columns={columns} data={data} navegacion={<BotonesNav />} titulo="Requerimientos">
      <div className='header-requisitos'>
        <InputTable></InputTable>
        <Section></Section>
      </div>

    </SimpleTable>






    // <div className="home-container">
    //   <div className='layout-home-container'>
    //     <div className='head-home-container'>
    //       <div className='header-home-container'>
    //       </div>
    //     </div>
    //     <SimpleTable columns={columns} data={data} titulo="Requerimientos" />
    //   </div>
    // </div>

  );
}