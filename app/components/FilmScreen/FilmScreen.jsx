import React, { Component } from 'react';
import 'whatwg-fetch';
import FilmDescription from '../FilmDescription/';
import FilmsCollection from '../FilmsCollection';
import Footer from '../Footer';
import './FilmScreen.css';

class FilmScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      currentFilm: {},  
    };
  }
/*
  componentDidMount() {
    this.fetchSend();
  }

  fetchSend() {
    fetch('https://netflixroulette.net/api/api.php?director=Quentin%20Tarantino')
      .then(response => response.json())
      .then(data => this.setState({ films: data }))
      .catch(error => console.log('error', error));
  }
*/
  render() {
    return (
      <div className="FilmScreen">
        <p>{this.props.searchQuery.match.url.replace('/film/', '')}</p>
        <FilmDescription currentFilm={this.state.currentFilm} />
        <FilmsCollection films={this.state.films} />
        <Footer />
      </div>
    );
  }
}

export default FilmScreen;
