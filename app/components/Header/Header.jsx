import React from 'react';
import AppTitle from '../AppTitle';
import Search from '../../containers/Search';
import './Header.css';

const Header = () => (
  <div className="header">
    <AppTitle />
    <Search />
  </div>
);

export default Header;
