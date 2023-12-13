import "./InputX.css"


export const InputX = ({children, nombre, type, required}) => {

    return (
        <div className="Input-container">
            <input type={type} required={required}></input>
            <label htmlFor={nombre}>{children}</label>
        </div>
    )
}