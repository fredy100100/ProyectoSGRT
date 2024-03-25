import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel
} from '@tanstack/react-table';
import './simpleTable.css';
import React, { useState } from 'react';
import { BotonesNav } from '../tablenavegation/botonesNav'
import { ModalX } from '../ModalX/ModalX';

export const Context = React.createContext();

export const SimpleTable = ({select, filtro, columns, data, titulo, buttonAction={value: false}}) => {

    const [sorting, setSorting] = useState([])
    const [filtering, setFiltering] = useState("")
    const [actionModal, setActionModal] = useState(false)

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

    const handleButtonAction = (rowData) => {
        select(rowData)
        setActionModal((prev) => !prev)
    }

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
                                            {
                                                (buttonAction.value ? <th></th> : null)
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
                                            {
                                                (buttonAction.value ? 
                                                <td>
                                                    <button className='actionContainer' 
                                                        onClick={() => handleButtonAction(row.original)}>
                                                            {buttonAction.action}
                                                    </button>
                                                </td> 
                                                : null)
                                            }
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
                    <ModalX estado={actionModal} cambiarEstado={setActionModal}>
                        
                    </ModalX>
            </div>
        </Context.Provider>
    )
}