import React from 'react';
import AppTitle from '../AppTitle';
import Search from '../../containers/Search';
import styles from './Header.css';

const Header = () => (
  <div className={styles.header}>
    <AppTitle />
    <Search />
  </div>
);

export default Header;
