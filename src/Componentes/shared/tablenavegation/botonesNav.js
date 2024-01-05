import React, { useContext } from 'react';
import { Context } from '../simpleTable/simpleTable';
import './botonesNav.css';

export const BotonesNav = () => {

    const { table } = useContext(Context);

    return (
        <div className='table-navegation'>
            <button onClick={() => table.setPageIndex(0)}><span className='span1'></span>Primera</button>
            <button onClick={() => table.previousPage()}><span className='span2'></span>Anterior</button>
            <button onClick={() => table.nextPage()}>Siguiente<span className='span3'></span></button>
            <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>Ultima<span className='span4'></span></button>
        </div>
    )
}