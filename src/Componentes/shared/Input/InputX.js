import "./InputX.css"

export const InputX = ({children, type, value, required}) => {

    return (
        <div className="Input-container">
            <input type={type} value={value} required={required}></input>
            <label>{children}</label>
        </div>
    )
}