import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ type, text, onClick }) => (
  <button type={type} onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  text: 'search',
  type: 'submit',
  onClick: () => {},
};

export default Button;
