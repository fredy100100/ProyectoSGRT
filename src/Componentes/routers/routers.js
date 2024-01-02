import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../../Componentes/Home/Home";
import { Inventario } from "../InventarioX/Inventario";
import { Estadisticas } from "../Estadisticas/Estadisticas";
import { Usuarios } from "../Usuarios/Usuarios";

export const MyRoutes = () => {

    return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Usuarios" element={<Usuarios/>}/>
                <Route path="/Inventario" element={<Inventario/>}/>
                <Route path="/Estadisticas" element={<Estadisticas/>}/>
            </Routes>
    )
}