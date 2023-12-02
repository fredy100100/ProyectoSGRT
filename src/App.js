import './App.css';
import Home from './Componentes/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Estadisticas } from './Componentes/Estadisticas/Estadisticas';
import { Inicio } from './Componentes/Inicio';


function App() {
  return (
    <div className="App">
    

<Router>

  <Routes>
    <Route path='/Estadisticas' element={<Estadisticas/> }></Route>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Inicio' element={<Inicio/>}></Route>

  </Routes>
</Router>


    </div>
    
  );
}

export default App;
