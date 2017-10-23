import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilmsCollection from '../FilmsCollection';

class FilmsCollectionWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      loading: true,
    };
  }

  componentDidMount() {
    // const mainDirector = this.props.currentFilm.director.split(',').length > 1
    //   ? this.props.currentFilm.director.split(',')[0]
    //   : this.props.currentFilm.director;
    // fetch(`https://netflixroulette.net/api/api.php?director=${mainDirector}`)
    //   .then(response => response.json())
    //   .then(data => this.setState({ films: data, loading: false }))
    //   .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div className="FilmScreen">
        <FilmsCollection films={this.state.films} loading={this.state.loading} />
      </div>
    );
  }
}

FilmsCollectionWrapper.defaultProps = {
  currentFilm: {
    poster: '',
    unit: 0,
    show_title: '',
    rating: '',
    category: '',
    runtime: '',
    release_year: '',
    summary: '',
    director: '',
    show_cast: '',
  },
};

FilmsCollectionWrapper.propTypes = {
  currentFilm: PropTypes.shape({
    poster: PropTypes.string,
    unit: PropTypes.number,
    show_title: PropTypes.string,
    rating: PropTypes.string,
    category: PropTypes.string,
    runtime: PropTypes.string,
    release_year: PropTypes.string,
    summary: PropTypes.string,
    director: PropTypes.string,
    show_cast: PropTypes.string,
  }),
};
export default FilmsCollectionWrapper;
