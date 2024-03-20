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

export const area = [
  { label: "Administración", value: 1 },
  { label: "Gerencia", value: 2 },
  { label: "Soporte TI", value: 3 },
  { label: "Servicio al cliente", value: 4 },
  { label: "Operación", value: 5 },
  { label: "Diseño y desarrollo", value: 6 }
]

export const sede = [
  { label: "Chapinero", value: 1 },
  { label: "Zona Industrial", value: 2 },
  { label: "Norte Calle 127", value: 3 },
  { label: "Soacha", value: 4 },
  { label: "Suba", value: 5 }
]