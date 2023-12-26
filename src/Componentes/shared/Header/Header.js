import './header.css'

export const Header = ( { getFilteredRowModel }) => {

  return (
    <div className="header-container">
      <input placeholder="Buscar">
      </input>
    </div>
  );
}