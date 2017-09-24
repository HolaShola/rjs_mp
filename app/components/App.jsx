import React, { Component } from 'react';
import 'whatwg-fetch';
import FilmsCollection from './FilmsCollection';
import FilmDescription from './FilmDescription';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film_id: 0,
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

  handleClick(id) {
    console.log(id);
    this.setState({ film_id: id });
    const currentFilm = this.state.films.find(film => film.unit === id);
    this.setState({ currentFilm: currentFilm });
  }

  render() {
    const changeComponent = this.state.film_id === 0
      ? <Header />
      : <FilmDescription currentFilm={this.state.currentFilm} />;
    return (
      <div>
        {changeComponent}
        <FilmsCollection
          func={id => this.handleClick(id)}
          films={this.state.films}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
