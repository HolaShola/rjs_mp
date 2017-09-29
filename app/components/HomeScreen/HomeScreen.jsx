import React from 'react';
import AppTitle from '../AppTitle';
import Search from '../Search';
import NotFound from '../NotFound';
import Footer from '../Footer';
import './HomeScreen.css';

const HomeScreen = () => (
  <div className="HomeScreen">
    <AppTitle />
    <Search />
    <NotFound />
    <Footer />
  </div>
);

export default HomeScreen;
