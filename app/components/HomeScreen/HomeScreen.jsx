import React from 'react';
import Header from '../Header';
import NotFound from '../NotFound';
import Footer from '../Footer';
import styles from './HomeScreen.css';

const HomeScreen = () => (
  <div className={styles.HomeScreen}>
    <Header />
    <NotFound />
    <Footer />
  </div>
);

export default HomeScreen;
