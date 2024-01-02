import '../../Iconos.css';
import { Main } from '../Main';
import { Section } from '../Section';
import { SimpleTable } from '../shared/simpleTable/simpleTable';
import data from './MOCK_DATA Requerimientos.json';
import { columns } from './mockhome';
import './Homex.css'

export const Home = () => {
  return (
    <div className="home-container">
      <div className='layout-home-container'>
        <div className='head-home-container'>
          <div className='header-home-container'>
          </div>
        </div>
        <SimpleTable columns={columns} data={data} titulo="Requerimientos" />
      </div>
    </div>

  );
}