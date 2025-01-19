import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const Textbox = React.forwardRef(
  ({ type = "text", placeholder, label, className, name, error }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1">
        {label && (
          <label htmlFor={name} className="text-slate-800">
            {label}
          </label>
        )}
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          ref={ref} // ref will come from react-hook-form
          aria-invalid={!!error}
          className={clsx(
            "bg-transparent px-3 py-2.5 2xl:py-3 border border-gray-300 placeholder-gray-400 text-gray-900 outline-none text-base focus:ring-2 ring-blue-300",
            className || ""
          )}
        />
        {error && <span className="text-xs text-[#f64949fe] mt-0.5">{error}</span>}
      </div>
    );
  }
);

Textbox.displayName = "Textbox";

Textbox.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.object]),
};

export default Textbox;
