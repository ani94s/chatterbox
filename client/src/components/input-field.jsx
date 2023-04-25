import React from "react";
import PropTypes from "prop-types";

export const InputField = ({
  name,
  placeholder,
  className,
  type,
  label,
  inline,
  onChange,
}) => {
  return (
    <div className={`${inline ? "inline" : "flex"} flex-col`}>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        placeholder={placeholder ?? ""}
        type={type ?? "text"}
        className={`p-2 border text-sm ${className}`}
        onChange={onChange}
      />
    </div>
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  inline: PropTypes.bool,
  onChange: PropTypes.func,
};
