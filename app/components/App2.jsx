import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import FilmScreen from './FilmScreen';

const App = () => (
  <div>
    <Route exact path="/" component={HomeScreen} />
    <Route path="/search/:searchQuery" component={SearchScreen} />
    <Route path="/film/:searchQuery" component={FilmScreen} />
  </div>
);

export default App;
