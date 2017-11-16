import React from 'react';
import PropTypes from 'prop-types';
import styles from './App_2.css';

const App2 = ({ name }) => (
  <div className={styles.myClassName}>Hello {name}</div>
);

App2.propTypes = {
  name: PropTypes.string.isRequired,
};

export default App2;
