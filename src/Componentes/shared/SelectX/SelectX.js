import React from "react";
import "./Select.css";
import Select from "react-select";

export const SelectX = ({className, children, register, setValue, name, options, required = { value: undefined, message:""} }) => {

  const handleSelectChange = (selectedOption) => {
    setValue(name, selectedOption.value);
  }
  return (
    <div className="SelectX-container">
      <Select
        className={className}
        {...register(name, {required: { value: required.value, message: required.message }})}
        options={options}
        onChange={handleSelectChange}
      />
      <label htmlFor={name}>{children}</label>
    </div>
  );
};
