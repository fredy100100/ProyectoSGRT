import { Row } from '../row/row'
import './table.css'

export const Table = () => {
    return (
        <table className="table-container">
            <div className='table-head'>
                <th className='table-head-item'>Nombre</th>
                <th>Apellido</th>
                <th>Correo</th>
                <th>Celular</th>
            </div>
            <Row />
        </table>
    )
}