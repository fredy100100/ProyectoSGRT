import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faUserGear, faCubes, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import { Link } from 'react-router-dom';

export const Main = () => {
  return (
    <main className='p-4'>
      <Row>
        <Col>
          <Link to={"/"}>
            <p className='P-2'>SGRT</p>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <FontAwesomeIcon className='icono-mensaje' icon={faComment} style={{ color: "#163a83" }} />
        </Col>
      </Row>
      <Row xs={2} md={4} lg={6}>
        <Col>
            <FontAwesomeIcon className='icono-config' icon={faUserGear} style={{ color: "#163a83" }} />
        </Col>
      </Row>
      <Row xs={2} md={4} lg={6}>
        <Col>
          <Dropdown>
            <Dropdown.Toggle variant="" className='icono-cubos-toggle'>
              <FontAwesomeIcon className='icono-cubos' icon={faCubes} style={{ color: "#163a83" }} />
            </Dropdown.Toggle>
            <Dropdown.Menu>        
              <Dropdown.Item href="/CrearUsuario">Crear Nuevo Usuario</Dropdown.Item>       
              <Dropdown.Item href="/Inventario">Actualizar inventario</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row xs={2} md={4} lg={6}>
        <Col>
          <Link to={"/Estadisticas"}>
            <FontAwesomeIcon className='icono-estadis' icon={faChartSimple} style={{ color: "#163a83" }} />
          </Link>
        </Col>
      </Row>
    </main>
  );
};
