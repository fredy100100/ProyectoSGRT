import React from "react";
import "./InputX.css";

export const InputX = ({
  onChange,
  value,
  placeholder,
  children,
  type,
  nombre,
  register,
  required = { value: undefined, message: "" },
  pattern = { value: undefined, message: "" },
  minLength = { value: undefined, message: "" },
  maxLength = { value: undefined, message: "" },
  disabled,
  style
}) => {
  return (
    <div className="Input-container">
      <input
        disabled={disabled}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        style={style}
        {...register(nombre, {
          required: {
            value: required.value,
            message: required.message,
          },
          pattern: {
            value: pattern.value,
            message: pattern.message
          },
          minLength: {
            value: minLength.value,
            message: minLength.message,
          },
          maxLength: {
            value: maxLength.value,
            message: maxLength.message,
          },
        })}
      ></input>
      <label htmlFor={nombre}>{children}</label>
    </div>
  );
};
