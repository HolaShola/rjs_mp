import React from 'react';
import { Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import FilmScreen from './FilmScreen';

const App = () => (
  <MuiThemeProvider>
    <div>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/search" component={SearchScreen} />
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
  </MuiThemeProvider>
);

export default App;
