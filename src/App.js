import './App.css';
import Home from './Componentes/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Estadisticas } from './Componentes/Estadisticas/Estadisticas';
import { Inicio } from './Componentes/Inicio';
import { Usuarios } from './Componentes/Usuarios/Usuarios';


function App() {
  return (
    <div className="App">
    

<Router>

  <Routes>
    <Route path='/Usuarios' element={<Usuarios/> }></Route>
    <Route path='/Estadisticas' element={<Estadisticas/> }></Route>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Inicio' element={<Inicio/>}></Route>

  </Routes>
</Router>


    </div>
    
  );
}

export default App;
