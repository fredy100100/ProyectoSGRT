import { mock } from "./mock"
import './row.css'

export const Row = () => {
    return (
        <div className="row-container">
            {
                mock.map((data) => {
                    return (
                        <div className="data-container">
                            <p className="data-name">{data.nombre}</p>
                            <p>{data.apellido}</p>
                            <p>{data.correo}</p>
                            <p>{data.celular}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}