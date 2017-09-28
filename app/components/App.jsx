import React, { Component } from 'react';
import 'whatwg-fetch';
import { Route } from 'react-router-dom';
import FilmsCollection from './FilmsCollection';
import FilmDescription from './FilmDescription';
import SearchResult from './SearchResult';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      currentFilm: {},
    };
  }

  componentDidMount() {
    this.fetchSend();
  }

  fetchSend() {
    fetch('https://netflixroulette.net/api/api.php?director=Quentin%20Tarantino')
      .then(response => response.json())
      .then(data => this.setState({ films: data }))
      .catch(error => console.log('error', error));
  }

  handleClick(showTitle) {
    const currentFilm = this.state.films.find(film => film.show_title === showTitle);
    this.setState({ currentFilm });
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={Header} />
        <Route path="/search/:searchQuery" render={(searchQuery => <SearchResult searchQuery={searchQuery} allFilms={this.state.films} />)} />
        <FilmsCollection
          func={showTitle => this.handleClick(showTitle)}
          films={this.state.films}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
