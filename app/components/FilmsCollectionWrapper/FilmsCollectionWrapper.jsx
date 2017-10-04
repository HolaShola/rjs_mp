import React, { Component } from 'react';
import FilmsCollection from '../FilmsCollection';

class FilmsCollectionWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      loading: true,
    };
  }

  componentWillReceiveProps(nextProps) {
    const mainDirector = nextProps.currentFilm.director.split(',').length > 1
      ? nextProps.currentFilm.director.split(',')[0]
      : nextProps.currentFilm.director;
    fetch(`https://netflixroulette.net/api/api.php?director=${mainDirector}`)
      .then(response => response.json())
      .then(data => this.setState({ films: data, loading: false }))
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div className="FilmScreen">
        <FilmsCollection films={this.state.films} loading={this.state.loading} />
      </div>
    );
  }
}

export default FilmsCollectionWrapper;
