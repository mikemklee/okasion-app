import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const SelectListField = ({
  name,
  value,
  label,
  error,
  info,
  onChange,
  options
}) => {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className="selectList">
      {label && <h6 className="selectList__label">{label}</h6>}
      <select
        className={classnames("selectList__input", {
          "selectList__input--invalid": error
        })}
        name={name}
        value={value}
        onChange={onChange}
      >
        {selectOptions}
      </select>
      {info && <small className="selectList__info">{info}</small>}
      {error && <div className="selectList__error">{error}</div>}
    </div>
  );
};

SelectListField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default SelectListField;
