import React, { Component } from 'react';
import './Button.css';

const Button = ({ button_type, button_text }) => (
  <button type={button_type}>
    {button_text}
  </button>
)

export default Button