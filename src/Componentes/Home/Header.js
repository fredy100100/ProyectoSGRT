import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../../App.css'
import '../../Iconos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';



export const Header = () => {
  return (
    <header>
      <Container>
        <Row className='p-2'>
          <Col xs ={5}>
            <Stack className='busqueda-botonn'  direction="horizontal" gap={3}>
              <Form.Control className="me-auto" placeholder="Buscar" />
            </Stack>
              </Col>
              <Col xs={3}>
              <Button variant='btn btn-light' >Buscar</Button>
              </Col>
              <Col xs={1}> <FontAwesomeIcon icon={faAlignJustify} className='iconofiltro' style={{color: "#3b3d40",}} /> </Col>
              <Col xs={1}>             
            <DropdownButton variant= "outline" id="dropdown-basic-button" title=" Filtrar ">
              <Dropdown.Item href="#/action-1">Sede
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Categoria</Dropdown.Item>
             <Dropdown.Item href="#/action-3">Prioridad</Dropdown.Item>
             <Dropdown.Item href="#/action-3">Tecnico</Dropdown.Item>
             <Dropdown.Item href="#/action-3">Fecha de creacion</Dropdown.Item>
           </DropdownButton>
         </Col>
        </Row>
      </Container>
    </header>
  );
}