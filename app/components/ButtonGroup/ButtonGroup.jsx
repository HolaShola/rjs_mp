import React from 'react';
import PropTypes from 'prop-types';
import './ButtonGroup.css';

const ButtonGroup = props => (
  <div className="ButtonGroup">
    <p>{props.label}</p>
    {props.children}
  </div>
);

ButtonGroup.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

export default ButtonGroup;
