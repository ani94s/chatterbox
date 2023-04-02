import React from "react";
import PropTypes from "prop-types";

export const InputField = ({
  id,
  placeholder,
  className,
  type,
  label,
  inline,
}) => {
  return (
    <div className={`${inline ? "inline" : "flex"} flex-col`}>
      <label htmlFor={id}>{label}</label>
      <input
        name={id}
        placeholder={placeholder ?? ""}
        type={type ?? "text"}
        className={`p-2 border text-sm ${className}`}
      />
    </div>
  );
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  inline: PropTypes.bool,
};
