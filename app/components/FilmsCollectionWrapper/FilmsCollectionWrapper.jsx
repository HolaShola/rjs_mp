import React, { Component } from 'react';
import FilmsCollection from '../FilmsCollection';

class FilmsCollectionWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      director: 'Quentin Tarantino',
      films: [],
    };
  }

  componentDidMount() {
    this.fetchSend2();
  }

  fetchSend2() {
    fetch(`https://netflixroulette.net/api/api.php?director=${this.props.currentFilm.director}`)
      .then(response => response.json())
      .then(data => this.setState({ films: data }))
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div className="FilmScreen">
        <div>{this.props.currentFilm.director}</div>
        <FilmsCollection films={this.state.films} />
      </div>
    );
  }
}

export default FilmsCollectionWrapper;
