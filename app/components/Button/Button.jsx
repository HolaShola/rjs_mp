import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ type, text }) => (
  <button type={type}>
    {text}
  </button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  text: 'search',
  type: 'submit',
};

export default Button;
