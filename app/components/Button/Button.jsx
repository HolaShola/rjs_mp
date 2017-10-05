import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.css';

const Button = ({ type, text, onClick, isActive }) => {
  const btnClass = classNames({
    [`btn-${type}`]: true,
    'btn-active': isActive,
  });
  return (
    <button onClick={onClick} className={btnClass}>
      {text}
    </button>);
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isActive: PropTypes.bool.isRequired,
};

Button.defaultProps = {
  text: 'search',
  type: 'submit',
  onClick: () => {},
  isActive: true,
};

export default Button;
