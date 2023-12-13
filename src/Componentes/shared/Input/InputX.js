import "./InputX.css"

export const InputX = ({children, type, nombre}) => {

    return (
        <div className="Input-container">
            <input type={type}></input>
            <label htmlFor={nombre}>{children}</label>
        </div>
    )
}