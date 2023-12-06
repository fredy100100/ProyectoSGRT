import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

export const Aside = () =>{
    return(
    <aside> 

        <Container>
          
        <Row xs={2} md={4} lg={6}>
        <Col className='p-3'><h6>Estado de solictud</h6></Col>
        <Col className='p-2'>
        <Dropdown as={ButtonGroup}>
      <Button variant="outline">Filtrar</Button>

      <Dropdown.Toggle split variant="outline-dark" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Sin atender</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Asignada</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Finalizada</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col><Table striped bordered hover>
      <thead>
        <tr>
          <th>Requerimiento</th>
          <th>Estado</th>
          <th>Fecha creacion</th>
          <th>Categoria</th>
          <th>cliente</th>
          <th>Prioridad</th>
          <th>Tecnico</th>
        </tr>
      </thead>
      <tbody>
        
      </tbody>
    </Table></Col>
      </Row>
    </Container>
     
     </aside>
   
)
}