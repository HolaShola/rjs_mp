import React from 'react';
import { Route } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import FilmScreen from './FilmScreen';

const App = () => (
  <div>
    <Route exact path="/" component={HomeScreen} />
    <Route
      path="/search/:searchQuery"
      render={searchQuery => (
        <SearchScreen searchQuery={searchQuery} />
      )}
    />
    <Route
      path="/film/:searchQuery"
      render={searchQuery => (
        <FilmScreen searchQuery={searchQuery} />
      )}
    />
  </div>
);

export default App;