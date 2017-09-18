import React, { Component } from 'react';
import './ButtonGroup.css';
import Button from '../Button';

const ButtonGroup = (props) => (
   <div>
       <p>{props.button_label}</p>
       {props.children}
   </div>
)

export default ButtonGroup
