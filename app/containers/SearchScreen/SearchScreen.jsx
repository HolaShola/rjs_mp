import React from 'react';
import 'whatwg-fetch';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import FilmsCollection from '../FilmsCollection';
import Footer from '../../components/Footer';
import './SearchScreen.css';

const SearchScreen = props => (
  <div>
    <Header />
    <FilmsCollection
      films={props.films}
    />
    <Footer />
  </div>
);


function mapStateToProps(state) {
  return {
    films: state.filmsProp.films,
  };
}

export default connect(mapStateToProps)(SearchScreen);

SearchScreen.PropTypes = {
  films: PropTypes.arrayOf.isRequired,
};
