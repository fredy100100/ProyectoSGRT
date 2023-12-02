import './App.css';
import Home from './Componentes/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Estadisticas } from './Componentes/Estadisticas/Estadisticas';
import { Usuarios } from './Componentes/Usuarios/Usuarios';

function App() {
  return (
    <div className="App">
    

<Router>

  <Routes>
  <Route path='/Usuarios' element={<Usuarios/> }></Route>
    <Route path='/Estadisticas' element={<Estadisticas/> }></Route>
    <Route path='/' element={<Home/>}></Route>
  </Routes>
</Router>


    </div>
    
  );
}

export default App;