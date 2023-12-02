import './App.css';
import Home from './Componentes/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Estadisticas } from './Componentes/Estadisticas/Estadisticas';


function App() {
  return (
    <div className="App">
    

<Router>

  <Routes>
    <Route path='/Estadisticas' element={<Estadisticas/> }></Route>
    <Route path='/' element={<Home/>}></Route>
  </Routes>
</Router>


    </div>
    
  );
}

export default App;
