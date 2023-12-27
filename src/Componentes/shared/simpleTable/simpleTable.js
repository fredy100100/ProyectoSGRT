import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel
} from '@tanstack/react-table';
import './simpleTable.css'
import React, { useState } from 'react'

export const SimpleTable = ({ columns, data, titulo }) => {

    const [sorting, setSorting] = useState([])
    const [filtering, setFiltering] = useState("")

    const paginationRowModel = getPaginationRowModel(8)

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: paginationRowModel,
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            globalFilter: filtering
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setFiltering
    });

    return (
        <>
            <input className='input-table' placeholder='Buscar' value={filtering} onChange={(e) => setFiltering(e.target.value)}/>
            <div className='tablaReusable'>
                <div className='table-header'>
                    <h1>{titulo}</h1>
                </div>
                <div className='simpleTable-container'>
                    <table>
                        <thead>
                            {
                                table.getHeaderGroups().map((headerGroup) => (
                                    <tr key={headerGroup.id}>
                                        {
                                            headerGroup.headers.map((header) => (
                                                <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                                                    {
                                                        flexRender(
                                                            header.column.columnDef.header,
                                                            header.getContext()
                                                        )
                                                    }
                                                    {
                                                        { asc: " ↑", desc: " ↓" }[header.column.getIsSorted() ?? null]
                                                    }
                                                </th>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                        </thead>
                        <tbody>
                            {
                                table.getRowModel().rows.map((row) => (
                                    <tr key={row.id}>
                                        {row.getVisibleCells().map((cell) => (
                                            <td>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        ))}
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <div className='table-navegation'>
                        <button onClick={() => table.setPageIndex(0)}><span className='span1'></span>Primera</button>
                        <button onClick={() => table.previousPage()}><span className='span2'></span>Anterior</button>
                        <button onClick={() => table.nextPage()}>Siguiente<span className='span3'></span></button>
                        <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>Ultima<span className='span4'></span></button>
                    </div>

                </div>
            </div>
        </>
    )
}