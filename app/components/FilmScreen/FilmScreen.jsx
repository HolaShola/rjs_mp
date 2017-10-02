import React, { Component } from 'react';
import 'whatwg-fetch';
import FilmDescription from '../FilmDescription/';
import FilmsCollectionWrapper from '../FilmsCollectionWrapper';
import Footer from '../Footer';
import './FilmScreen.css';

class FilmScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilm: {},
    };
  }

  componentDidMount() {
    this.fetchSend(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.fetchSend(nextProps);
  }

  fetchSend(anyProps) {
    fetch(`https://netflixroulette.net/api/api.php?${anyProps.searchQuery.match.url.replace('/film/', '')}`)
      .then(response => response.json())
      .then(data => this.setState({ currentFilm: data }))
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div className="FilmScreen">
        <FilmDescription currentFilm={this.state.currentFilm} />
        <FilmsCollectionWrapper currentFilm={this.state.currentFilm} />
        <Footer />
      </div>
    );
  }
}

export default FilmScreen;
