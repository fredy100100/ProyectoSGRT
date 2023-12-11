import { Children } from "react";
import "./Select.css";
import Select from "react-select";

export const SelectX = ({props, children}) => {

    const selectChange = ({ value }) => {
        console.log(value)
    }

    return (

        <div className="SelectX-container"> 
            <Select {...props} onChange={selectChange} />
            <label>{children}</label>
        </div>
    )
}
