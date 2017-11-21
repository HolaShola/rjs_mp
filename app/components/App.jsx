import React from 'react';
import styles from './App.css';
import AppTitle from './AppTitle';
import Search from './Search';

const App = () => (
  <div className={styles.myClassName}>
    <AppTitle />
    <Search />
  </div>
);

export default App;