import styled from 'styled-components';

export const BotonX = ({children, onClick}) => {
    
    return (
        
        <>
        <ContenedorBotones>
            <Boton onClick={onClick}>{children}</Boton>
      </ContenedorBotones>
        </>
    )
}

const ContenedorBotones = styled.div`
  display: flex;
`
const Boton = styled.button`
  padding: 10px 30px;
  border-radius: 100px;
  color: #fff;
  border: none;
  background: #1766dc;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  transition: 0.3s ease all;
  height: fit-content;

  &:hover {
    background: #0066ff;
  }
`;