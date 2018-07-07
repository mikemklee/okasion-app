import React from "react";
import PropTypes from "prop-types";

const Icon = ({ name, color }) => (
  <svg>
    <use xlinkHref={`/assets/sprite.svg#icon-${name}`} fill={color} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default Icon;
