import React from "react";
import "./Select.css";
import Select from "react-select";

export const SelectX = ({ children, nombre, options, register, required = { value: undefined, message:""} }) => {

  const selectChange = ({ register, value }) => {
    ;

  };

  return (
    <div className="SelectX-container">
      <Select
        {...register(nombre, {
          required: {
            value: required.value,
            message: required.message,
          },
        })}
        onChange={selectChange}
        options={options}
      />
      <label htmlFor={nombre}>{children}</label>
    </div>
  );
};
