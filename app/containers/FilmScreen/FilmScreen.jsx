import React, { Component } from 'react';
import 'whatwg-fetch';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FilmDescription from '../../components/FilmDescription/';
import FilmsCollectionWrapper from '../FilmsCollectionWrapper';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';
import styles from './FilmScreen.css';

class FilmScreen extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentFilm.status_message) {
    //  window.location = '/';
    }
  }

  render() {
    return (
      <div className={styles.FilmScreen}>
        {this.props.isFetching
          ? <Loader />
          : (<div><FilmDescription currentFilm={this.props.currentFilm} />
            <FilmsCollectionWrapper currentFilm={this.props.currentFilm} />
          </div>)
        }
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.filmsProp.isFetching,
    currentFilm: state.filmsProp.currentFilm,
  };
}

FilmScreen.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  currentFilm: PropTypes.oneOfType(
    [
      PropTypes.string,
      PropTypes.shape({
        poster_path: PropTypes.string,
        original_title: PropTypes.string,
        vote_average: PropTypes.number,
        category: PropTypes.string,
        release_date: PropTypes.string,
        runtime: PropTypes.number,
        overview: PropTypes.string,
        director: PropTypes.string,
        show_cast: PropTypes.string,
      }),
    ],
  ),
};

FilmScreen.defaultProps = {
  currentFilm: {
    poster_path: '',
    original_title: '',
    vote_average: 0,
    category: '',
    release_date: '',
    runtime: 0,
    overview: '',
    director: '',
    show_cast: '',
  },
};

export default connect(mapStateToProps)(FilmScreen);
