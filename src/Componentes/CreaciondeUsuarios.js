import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Main } from "./Main"
import {Section} from './Section';
import '../App.css'

export const CreaciondeUsuarios = () =>{
   
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
      });
    
      const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Nuevo usuario creado:', userData);
        setUserData({
          firstName: '',
          lastName: '',
          username: '',
          password: '',
        });
      };
    
      return (
        <div className='Cus'>
        <Container className="mt-5">
          <Row className="justify-content-center">
            <Col md={6}>
              <Form onSubmit={handleSubmit} className="p-4 border rounded">
                <h2 className="mb-4 text-center">Agregar Nuevo Usuario</h2>
    
                <Form.Group controlId="formFirstName">
                  <Form.Label>Nombre:</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={userData.firstName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
    
                <Form.Group controlId="formLastName">
                  <Form.Label>Apellido:</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={userData.lastName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
    
                <Form.Group controlId="formUsername">
                  <Form.Label>Usuario:</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={userData.username}
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
    
                <Button variant="primary" type="submit" block>
                  Crear Usuario
                </Button>
              </Form>

            </Col>
          </Row>
        </Container>

        <Main/>
        <Section/>

        </div>

      );
    };
      