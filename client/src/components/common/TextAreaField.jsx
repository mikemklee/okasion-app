import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextAreaField = ({
  name,
  placeholder,
  value,
  error,
  label,
  onChange
}) => {
  return (
    <div className="textarea">
      {label && <h6 className="textarea__label">{label}</h6>}
      <textarea
        className={classnames("textarea__input", {
          "textarea__input--invalid": error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="textarea__error">{error}</div>}
    </div>
  );
};

TextAreaField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string
};

export default TextAreaField;
