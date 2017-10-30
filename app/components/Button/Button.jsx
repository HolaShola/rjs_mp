import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import './Button.css';

const Button = (props) => {
  const btnClass = classNames({
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
  onClick: PropTypes.func,
  isActive: PropTypes.bool.isRequired,
};

Button.defaultProps = {
  text: 'search',
  type: 'submit',
  onClick: () => {},
  isActive: true,
};

function mapStateToProps(state) {
  return {
    buttonValueForSearch: state.buttonValueForSearch,
  }
}

export default connect(mapStateToProps)(Button);