import { Children } from "react";
import "./Select.css";
import Select from "react-select";

export const SelectX = ({children, options}) => {

    const selectChange = ({ value }) => {
        console.log(value)
    } 

    return (

        <div className="SelectX-container"> 
            <Select options={options} onChange={selectChange} />
            <label>{children}</label>
        </div>
    )
}
