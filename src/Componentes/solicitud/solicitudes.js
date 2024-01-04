import { SimpleTable } from '../shared/simpleTable/simpleTable';
import { BotonX } from '../shared/BotonX/BotonX';
import { columns } from './mock'
import data from './MOCK_DATA Sol_History.json';
import './solicitudes.css';

export const Solicitudes = () => {

    return (

        <div className="solicitudes-container">
            <div className="solicitud">
                <div className="generar-modificar">
                    <BotonX>Generar solicitud</BotonX>
                    <p>Para recibir asistencia técnica, genera tu solicitud y comienza el proceso de inmediato.</p>
                </div>
                <div className="generar-modificar">
                    <BotonX>Modificar solicitud</BotonX>
                    <p>Si necesitas actualizar tu solicitud, ¡no te preocupes!, Haz clic y ajustala fácilmente</p>
                </div>
            </div>
            <div className='tabla-historial'>
                <SimpleTable columns={columns} data={data} titulo="Tus solicitudes" />
            </div>

        </div>
    )
}