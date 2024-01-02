import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "./Componentes/routers/routers";
import styled from "styled-components";
import "./App.css";
import { Sidebar } from "./Componentes/shared/sidebar/sidebar";
import { useState } from "react";

function App() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Container className={sidebarOpen ? "sidebarState active" : "sidebarState"}>
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
            <MyRoutes />
        </Container>
      </BrowserRouter>
    </div>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 90px auto;
  transition: all 0.3s;

  &.active {
    grid-template-columns: 300px auto;
  }
`;

export default App;

