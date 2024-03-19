import { SimpleTable } from '../shared/simpleTable/simpleTable';
import { BotonX } from '../shared/BotonX/BotonX';
import { columns } from './mock'
import data from './MOCK_DATA Sol_History.json';
import './solicitudes.css';
import { CrearSolicitud } from './CrearSolicitud/crearsolicitud';
import axios from "axios"

export const Solicitudes = () => {

    const data = async () => {
        const response = await axios.get ()
    }

    return (

        <div className="solicitudes-container">
            <div className="solicitud">
                <div className="generar-modificar">
                    <CrearSolicitud>Generar solicitud</CrearSolicitud>
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