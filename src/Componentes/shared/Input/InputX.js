import "./InputX.css"

export const InputX = ({children}) => {

    return (
        <div className="Input-container" required>
            <input type="text"></input>
            <label>{children}</label>
        </div>
    )
}