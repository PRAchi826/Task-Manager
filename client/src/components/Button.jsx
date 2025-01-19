import clsx from "clsx";
import React from "react";
import PropTypes from "prop-types";

const Button = ({ icon = null, className = "", label, type = "button", onClick = () => {} }) => {
  return (
    <button
      type={type}
      className={clsx("px-3 py-2 outline-none", className)}
      onClick={onClick}
    >
      <span>{label}</span>
      {icon && icon}
    </button>
  );
};

// Define PropTypes for the component
Button.propTypes = {
  icon: PropTypes.node, // Allows any renderable node (React elements, strings, etc.)
  className: PropTypes.string, // Must be a string
  label: PropTypes.string.isRequired, // Label is required and must be a string
  type: PropTypes.string, // Must be a string
  onClick: PropTypes.func, // Must be a function
};

export default Button;
