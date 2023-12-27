import './header.css'

export const Header = ( {filtering, setFiltering}) => {

  const handleInputChange = (e) => {
    setFiltering(e.target.value);
  };

  return (
    <div className="header-container">
      <input placeholder="Buscar" value={filtering} onChange={handleInputChange}>
      </input>
    </div>
  );
}