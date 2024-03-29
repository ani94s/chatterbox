import React from "react";
import PropTypes from "prop-types";

export const FormContainer = ({ children }) => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className=" flex flex-col w-card h-card items-center shadow-slate-700 shadow-xl border rounded-md bg-white">
        {children}
      </div>
    </div>
  );
};

FormContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
