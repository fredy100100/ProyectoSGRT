import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel
} from '@tanstack/react-table';
import './simpleTable.css';
import React, { Children, useState } from 'react';
import { BotonesNav } from '../tablenavegation/botonesNav'

export const Context = React.createContext();

export const SimpleTable = ({filtro, columns, data, titulo}) => {

    const [sorting, setSorting] = useState([])
    const [filtering, setFiltering] = useState("")

    const paginationRowModel = getPaginationRowModel()

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
        <Context.Provider value={{ filtering, setFiltering, table }}>
            <div className='tablaReusable'>
                {filtro}
                <div className='table-container'>
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
                    </div>
                    {
                       (data.length > 10 ) ? <BotonesNav /> : null
                    }
                </div>

            </div>
        </Context.Provider>
    )
}