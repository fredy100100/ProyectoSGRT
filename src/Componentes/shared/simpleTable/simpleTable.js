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

export const SimpleTable = ({columns, data}) => {

    const [sorting, setSorting] = useState([])
    const [filtering, setFiltering] = useState("")

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
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

        <div className='tablaReusable'>
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
                                                {asc:" ↑", desc:" ↓"}[header.column.getIsSorted() ?? null]
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
            <button onClick={() => table.setPageIndex(0)}>Primera Pagina</button>
            <button onClick={() => table.previousPage()}>Anterior Pagina</button>
            <button onClick={() => table.nextPage()}>Siguente Pagina</button>
            <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>Ultima Pagina</button>
        </div>
    )
}