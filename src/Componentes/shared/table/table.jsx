import { Row } from '../row/row';
import { Rowhead } from '../RowHead/Rowhead';
import { headTableUsuarios } from '../../Usuarios/mock'
import './table.css'

export const Table = () => {
    return (
        <table className="table-container">
            <thead className='table-head'>
                <Rowhead items={headTableUsuarios} />
            </thead>
            <Row />
        </table>
    )
}