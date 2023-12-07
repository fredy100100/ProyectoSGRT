import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Main } from "./Main"
import { Section } from './Section';
import '../App.css';

export const CreaciondeUsuarios = () => {

  const [userData, setUserData] = useState({
    Identificacion: " ",
    PrimerNombre: "",
    SegundoNombre: '',
    PrimerApellido: '',
    SegundoApellido: " ",
    Correo: '',
    Celular: " ",
    password: '',
    Rol: " ",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nuevo usuario creado:', userData);
    setUserData({
      Identificacion: " ",
      PrimerNombre: "",
      SegundoNombre: '',
      PrimerApellido: '',
      SegundoApellido: " ",
      Correo: '',
      Celular: " ",
      password: '',
      Rol: " ",
    });
  };

  return (


      <div className='Cus'>
        <Container className="mt-5">
          <Row className="justify-content-center">
            <Col md={6}>
              <Form onSubmit={handleSubmit} className="p-4 border rounded">
                <h2 className="mb-4 text-center">Agregar Nuevo Usuario</h2>

                <Form.Group controlId="formidentificacion">
                  <Form.Label>Numero de Documento:</Form.Label>
                  <Form.Control
                    type="text"
                    name="Identificacion"
                    value={userData.Identificacion}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPrimerNombre">
                  <Form.Label>Primer Nombre:</Form.Label>
                  <Form.Control
                    type="text"
                    name="PrimerNombre"
                    value={userData.PrimerNombre}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formSegundoNombre">
                  <Form.Label>Segundo Nombre:</Form.Label>
                  <Form.Control
                    type="text"
                    name="SegundoNombre"
                    value={userData.SegundoNombre}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formPrimerApellido">
                  <Form.Label>Primer Apellido:</Form.Label>
                  <Form.Control
                    type="text"
                    name="PrimerApellido"
                    value={userData.PrimerApellido}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formSegundoApellido">
                  <Form.Label>Segundo Apellido:</Form.Label>
                  <Form.Control
                    type="text"
                    name="SegundoApellido"
                    value={userData.SegundoApellido}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="formCorreo">
                  <Form.Label>Correo Electronico:</Form.Label>
                  <Form.Control
                    type="text"
                    name="Correo"
                    value={userData.Correo}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formCelular">
                  <Form.Label>Celular:</Form.Label>
                  <Form.Control
                    type="Int"
                    name="Celular"
                    value={userData.Celular}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Contraseña:</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formRol">
                  <Form.Label>Rol:</Form.Label>
                  <Form.Control
                    type="text"
                    name="Rol"
                    value={userData.Rol}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" block>
                  Crear Usuario
                </Button>
              </Form>

            </Col>
          </Row>
        </Container>

        <Main />
        <Section />

      </div>


  );
};
