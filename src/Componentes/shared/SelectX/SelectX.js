import "./Select.css";
import Select from "react-select";

export const SelectX = (props) => {

    const {children} = props
    const {nombre} = props

    const selectChange = ({ value }) => {
        console.log(value)
    } 

    return (

        <div className="SelectX-container"> 
            <Select {...props} onChange={selectChange} />
            <label htmlFor={nombre}>{children}</label>
        </div>
    )
}
