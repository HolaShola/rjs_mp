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
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchSend();
  }

  fetchSend() {
    fetch(`https://netflixroulette.net/api/api.php?${this.props.searchQuery.match.url.replace('/search/', '')}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        if (data.errorcode) {
          console.log(data.message);
          window.location = "/";
        } else {
          if (Array.isArray(data)) {
            this.setState({ films: data, loading: false });
          } else {
            this.setState({ films: [data], loading: false });
          }
        }
      })
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div>
        <Header />
        <FilmsCollection films={this.state.films} loading={this.state.loading} func={id => this.handleClick(id)} />
        <Footer />
      </div>
    );
  }
}

export default SearchScreen;
