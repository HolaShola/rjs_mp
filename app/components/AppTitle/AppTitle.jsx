import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AppTitle.css';

const AppTitle = () => (
  <div className={styles.AppTitle}>
    <Link to="/">
      <p>nextflixroulette</p>
    </Link>
  </div>
);

export default AppTitle;
