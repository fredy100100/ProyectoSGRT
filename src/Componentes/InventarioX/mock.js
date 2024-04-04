export const marcaactivo = [
    { label: 'Lenovo', value: 1 },
    { label: 'HP', value: 2 },
    { label: 'Dell', value: 3 },
    { label: 'Logitec', value: 4 }
]

export const tipoactivo = [
    { label: 'Teclado', value: 1 },
    { label: 'Mouse', value: 2 },
    { label: 'Portatil', value: 3 },
    { label: 'Monitor', value: 4 }
]

export const headTableActivos = [
    {
        header: "Tipo",
        accessorKey: 'idtipo'
    },
    {
        header: "Marca",
        accessorKey: 'idmarca'
    },
    {
        header: "Serial",
        accessorKey: 'idserial'
    },
    {
        header: "Modelo",
        accessorKey: 'modelo'
    },
    {
        header: "Asignado",
        accessorKey: 'idperson'
    }
]