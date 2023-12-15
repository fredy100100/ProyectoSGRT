import React from "react";
import "./Select.css";
import Select from "react-select";
import { useFormContext } from 'react-hook-form';

export const SelectX = ({ children, nombre, options, required = { value: undefined, message:""} }) => {

  const {register} = useFormContext();

  return (
    <div className="SelectX-container">
      <Select
        {...register(nombre, {
          required: {
            value: required.value,
            message: required.message,
          }
        })}
        options={options}
      />
      <label htmlFor={nombre}>{children}</label>
    </div>
  );
};
