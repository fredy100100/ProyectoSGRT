import Button from "react-bootstrap/Button";
import '../Agree/agree.css'

export const Agree = () => {
  return (
    <div className="Agree-container">
      <div>
        <Button variant="btn btn-light">Agregar Usuario</Button>
      </div>
      <div>
        <Button variant="btn btn-light">Modificar Usuario</Button>
      </div>
    </div>
  );
};
