import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Button.css';

const cx = classNames.bind(styles);

const Button = (props) => {
  const btnClass = cx({
    [`btn-${props.type}`]: true,
    'btn-active': props.text === props.buttonValueForSearch,
  });

  return (
    <button onClick={props.onClick} className={btnClass}>
      {props.text}
    </button>);
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonValueForSearch: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  buttonValueForSearch: 'movie',
  onClick: () => {},
};

export default Button;
