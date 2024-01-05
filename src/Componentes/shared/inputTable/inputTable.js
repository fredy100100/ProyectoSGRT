import React, { useContext } from 'react';
import { Context } from '../simpleTable/simpleTable';
import './inputTable.css';

export const InputTable = (props) => {

    const { setFiltering, filtering } = useContext(Context);

    return (
         <input className='input-table' placeholder='Buscar' value={filtering} onChange={(e) => setFiltering(e.target.value)} />
    )
}