import React, { Component } from 'react';
import FilmsCollection from '../FilmsCollection';

class FilmsCollectionWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    fetch(`https://netflixroulette.net/api/api.php?director=${nextProps.currentFilm.director}`)
      .then(response => response.json())
      .then(data => this.setState({ films: data }))
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div className="FilmScreen">
        <FilmsCollection films={this.state.films} />
      </div>
    );
  }
}

export default FilmsCollectionWrapper;
