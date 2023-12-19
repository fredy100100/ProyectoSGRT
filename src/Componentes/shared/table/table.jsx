import { Row } from '../row/row';
import { Rowhead } from '../RowHead/Rowhead';
import './table.css'

export const Table = ({headTable, dataTable}) => {
    return (
        <table className="table-container">
            <thead className='table-head'>
                <Rowhead items={headTable} />
            </thead>
            <Row elements={dataTable} />
        </table>
    )
}