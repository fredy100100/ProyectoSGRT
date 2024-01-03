  import { Section } from "../Section";
import "../../App.css";
import { HomeEst } from "../shared/barrs/HomeEst"
import "../Estadisticas/Estadisticas.css"

export const Estadisticas = () => {
  return (
    <div className="Est">
      <div className="HomeEst-container">
        <HomeEst></HomeEst>
      </div>    
      <Section />
    </div>
  );
};
