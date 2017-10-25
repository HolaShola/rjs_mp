import React, { Component } from 'react';
import 'whatwg-fetch';
import PropTypes from 'prop-types';
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
          window.location = '/';
        } else if (Array.isArray(data)) {
          this.setState({ films: data.sort((a, b) => parseInt(b.release_year, 10) - parseInt(a.release_year, 10)), loading: false });
        } else {
          window.location = `/#/film/title=${data.show_title}`;
        }
      })
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div>
        <Header />
        <FilmsCollection
          films={this.state.films}
          loading={this.state.loading}
          func={id => this.handleClick(id)}
        />
        <Footer />
      </div>
    );
  }
}

SearchScreen.defaultProps = {
  searchQuery: {
    history: {},
    location: {},
    match: {},
  },
  match: {},
};

SearchScreen.propTypes = {
  searchQuery: PropTypes.objectOf(PropTypes.object),
  match: PropTypes.objectOf(PropTypes.element),
};

export default SearchScreen;
