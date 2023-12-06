import './App.css';
import Home from './Componentes/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Estadisticas } from './Componentes/Estadisticas/Estadisticas';
import { Inicio } from './Componentes/Inicio';
import { CreaciondeUsuarios } from './Componentes/CreaciondeUsuarios';
import { Inventario } from './Componentes/Inventario';
import { Usuarios } from "./Componentes/Usuarios/Usuarios";

function App() {
  return (
    <div className="App">
    

<Router>

  <Routes>
    <Route path='/Estadisticas' element={<Estadisticas/> }></Route>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Inicio' element={<Inicio/>}></Route>
    <Route path='/CrearUsuario' element={<CreaciondeUsuarios/>}></Route>
    <Route path='/Inventario' element={<Inventario/>}></Route>
    <Route path='/Usuarios' element={<Usuarios/>}></Route>
  </Routes>
</Router>


    </div>
    
  );
}

export default App;
