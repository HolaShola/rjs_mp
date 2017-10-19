import React, { Component } from 'react';
import 'whatwg-fetch';
import { connect } from 'react-redux';
import FilmDescription from '../FilmDescription/';
import FilmsCollectionWrapper from '../FilmsCollectionWrapper';
import Footer from '../Footer';
import Loader from '../Loader';
import './FilmScreen.css';

class FilmScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilm: {},
      loading: true,
    };
  }

  componentDidMount() {
  //  this.fetchSend(this.props);
  }

  componentWillReceiveProps(nextProps) {
  //  this.fetchSend(nextProps);
  }

  // fetchSend(anyProps) {
  //   fetch(`https://netflixroulette.net/api/api.php?${anyProps.searchQuery.match.url.replace('/film/', '')}`)
  //     .then(response => response.json())
  //     .then(data => this.setState({ currentFilm: data, loading: false }))
  //     .catch(error => console.log('error', error));
  // }

  render() {
    return (
      <div className="FilmScreen">
        {this.state.loading
          ? <Loader />
          : (<div><FilmDescription currentFilm={this.state.currentFilm} />
            <FilmsCollectionWrapper currentFilm={this.state.currentFilm} />
          </div>)
        }
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.isFetching,
  }
}

function mapActionsToProps(dispatch) {
  return {
    
  }
}

export default connect(mapStateToProps, mapActionsToProps)(FilmScreen);