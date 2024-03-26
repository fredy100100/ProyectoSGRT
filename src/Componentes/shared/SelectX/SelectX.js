import React from "react";
import "./Select.css";
import Select from "react-select";

export const SelectX = ({defaultValue, children, register, setValue, name, options, required = { value: undefined, message:""} }) => {

  const handleSelectChange = (selectedOption) => {
    setValue(name, selectedOption.value);
  }
  return (
    <div className="SelectX-container">
      <Select
        className="select-container"
        {...register(name, {required: { value: required.value, message: required.message }})}
        options={options}
        onChange={handleSelectChange}
        defaultValue={defaultValue}
      />
      <label htmlFor={name}>{children}</label>
    </div>
  );
};
