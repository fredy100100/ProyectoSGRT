export const columns = [
  {
    header: "Tipo Id",
    accessorKey: 'iddoc'
  },
  {
    header: "Numero Id",
    accessorKey: 'nodoc'
  },
  {
    header: "Nombre Completo",
    accessorFn: row => `
    ${row.pnom} 
    ${row.snom} 
    ${row.sape} 
    ${row.pape}
    `
  },
  {
    header: "Correo",
    accessorKey: 'correo'
  },
  {
    header: "Celular",
    accessorKey: 'celular'
  },
  {
    header: "Cargo",
    accessorKey: 'idcargo'
  },
  {
    header: "Estado",
    accessorKey: 'estado',
    cell: (props) => {
      return(
        <div style={{ backgroundColor: props.getValue() === 'Activo' ? '#1d8453' : '#db3444',
                      color: 'white',
                      borderRadius:'10px', 
                      textAlign:'center'}}
                      >
          {props.getValue()}
        </div>
      )
    }
  }
]