import React, { Component } from 'react';
import './ButtonGroup.css';
import Button from '../Button';

const ButtonGroup = (props) => (
   <div className="ButtonGroup">
       <p>{props.label}</p>
       {props.children}
   </div>
)

export default ButtonGroup
