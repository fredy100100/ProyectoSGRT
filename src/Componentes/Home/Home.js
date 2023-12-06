import '../../App.css';
import '../../Iconos.css';
import { Aside } from './Aside';
import {Main} from '../Main';
// import { Menu } from '../shared/menu/menu';
import { Header } from '../Home/Header';
import { Section } from '../Section';


function Home() {
  return (
    <div className="Home">
      <Header />
      <Section />
      <Aside />
      {/* <Menu /> */}
      <Main/>       

    </div>

  );
}

export default Home;