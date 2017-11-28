import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.css';

const Footer = () => (
  <div className={styles.Footer}>
    <div className={styles.footer_label}>
      <Link to="/">
        <p>nextflixroulette</p>
      </Link>
    </div>
  </div>
);

export default Footer;
