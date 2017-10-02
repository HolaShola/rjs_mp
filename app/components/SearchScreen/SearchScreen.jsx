import React, { Component } from 'react';
import 'whatwg-fetch';
import Header from '../Header';
import FilmsCollection from '../FilmsCollection';
import Footer from '../Footer';
import './SearchScreen.css';

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
    };
  }

  componentDidMount() {
    this.fetchSend();
  }

  fetchSend() {
    fetch(`https://netflixroulette.net/api/api.php?${this.props.searchQuery.match.url.replace('/search/', '')}`)
      .then(response => response.json())
      .then(data => this.setState({ films: data }))
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div>
        <Header />
        <FilmsCollection films={this.state.films} func={id => this.handleClick(id)} />
        <Footer />
      </div>
    );
  }
}

export default SearchScreen;
