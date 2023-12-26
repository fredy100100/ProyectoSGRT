import '../../Iconos.css';
import { Main } from '../Main';
import { Header } from '../shared/Header/Header';
import { Section } from '../Section';
import { SimpleTable } from '../shared/simpleTable/simpleTable';
import data from './MOCK_DATA Requerimientos.json';
import { columns } from './mockhome';
import './Home.css'


function Home() {
  return (
    <div className="home-container">
      <Main></Main>
      <div className='layout-home-container'>
        <div className='head-home-container'>
          <div className='header-home-container'>
            <Header />
          </div>
          <Section />
        </div>
        <SimpleTable columns={columns} data={data} titulo="Requerimientos" />
      </div>




    </div>

  );
}

export default Home;