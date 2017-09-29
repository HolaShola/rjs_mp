import React, { Component } from 'react';
import 'whatwg-fetch';
import AppTitle from '../AppTitle';
import Search from '../Search';
import FilmsCollection from '../FilmsCollection';
import Footer from '../Footer';
import './SearchScreen.css';

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: []  
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

  render() {
    return (
      <div>
        <AppTitle />
        <Search />
        <FilmsCollection films={this.state.films} />
        <Footer />
      </div>
    );
  }
}

export default SearchScreen;
