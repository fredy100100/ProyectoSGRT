export const columns = [
  {
    header: "Tipo Id",
    accessorKey: 'TipoId'
  },
  {
    header: "Numero Id",
    accessorKey: 'NumeroId'
  },
  {
    header: "Nombre Completo",
    accessorFn: row => `
    ${row.PrimerNombre} 
    ${row.SegundoNombre} 
    ${row.PrimerApellido} 
    ${row.SegundoApellido}
    `
  },
  {
    header: "Correo",
    accessorKey: 'Correo'
  },
  {
    header: "Celular",
    accessorKey: 'Celular'
  },
  {
    header: "Rol",
    accessorKey: 'Rol'
  }
]

export const tipoIdentificacion = [
  { label: "Cedula de ciudadania", value: 1 },
  { label: "Pasaporte", value: 2 },
  { label: "Tarjeta de identidad", value: 3 }
]

export const rol = [
  { label: "Cliente", value: 1 },
  { label: "Técnico", value: 2 },
  { label: "Supervisor", value: 3 }
]