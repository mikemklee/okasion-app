import React from "react";
import PropTypes from "prop-types";
import { BigInputMoment } from "react-input-moment";
import "react-input-moment/css/input-moment.min.css";

const DateField = ({ date, onChange, label, error }) => {
  return (
    <div className="dateField">
      {label && <h6 className="dateField__label">{label}</h6>}
      <div className="dateField__picker">
        <BigInputMoment moment={date} onChange={onChange} locale="en" />
      </div>
      {error && <div className="dateField__error">{error}</div>}
    </div>
  );
};

DateField.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  error: PropTypes.string
};

export default DateField;
