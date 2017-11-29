import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonGroup.css';

const ButtonGroup = props => (
  <div className={styles.ButtonGroup}>
    <p>{props.label}</p>
    {React.Children.map(props.children, (child, index) =>
      React.cloneElement(child, {
        onClick: () => {
          props.onChange(index);
        },
      }),
    )}
  </div>
);

ButtonGroup.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.shape()),
};

ButtonGroup.defaultProps = {
  onChange: () => {},
  children: [],
};

export default ButtonGroup;

