import Button from "react-bootstrap/Button";
import '../Agree/agree.css';
import { Link } from "react-router-dom";

export const Agree = () => {
  return (
    <div className="Agree-container">
      <div>
        <Link to="/Inventario">
          <Button variant="btn btn-light">Agregar Usuario</Button>
        </Link>        
      </div>
      <div>
        <Button variant="btn btn-light">Modificar Usuario</Button>
      </div>
    </div>
  );
};
