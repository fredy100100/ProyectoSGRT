import "./InputX.css"

export const InputX = (props) => {

    return (
        <div className="Input-container">
            <input type={props.type} value={props.value} onChange={props.onChange} required={props.required}></input>
            <label>{props.label}</label>
        </div>
    )
}