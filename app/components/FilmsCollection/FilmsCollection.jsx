import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FilmItem from '../FilmItem';
import './FilmsCollection.css';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import Loader from '../Loader';

class FilmsCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonValue: '',
    };
  }

  handleSearchByChange = (index) => {
    index == 0 ? this.sortByReleaseDate() : this.sortByRating();
    this.setState({buttonValue: index});
  }

  sortByReleaseDate() {
    this.props.films.sort((a, b) => parseInt(b.release_year) - parseInt(a.release_year));
  }

  sortByRating() {
    this.props.films.sort((a, b) => parseInt(b.rating) - parseInt(a.rating));
  }
    
  renderDiscography() {
    if (this.props.loading) {
      return (<Loader />);
    } else {
      if (Array.isArray(this.props.films)) {
        return this.props.films.map(film =>
          <Link to={encodeURI(encodeURI(`/film/title=${film.show_title}`))} replace key={film.unit}>
            <FilmItem
              id={film.unit}
              posterUrl={film.poster}
              release_year={film.release_year}
              show_title={film.show_title}
              category={film.category}
              director={film.director}
              show_cast={film.show_cast}
              summary={film.summary}
            />
          </Link>
        )
      } else if (this.props.films.errorcode) {
        console.log(this.props.films.message);
      }
    }
    return null;
  }

  render() {
    return (
      <div className="FilmsCollection">
        <div className="sort">
          <div className="search_number_result">
            <p>{this.props.films.length} movies found</p>
          </div>
          <div className="sort_by">
            <ButtonGroup label="sort by" onChange={this.handleSearchByChange}>
              <Button type="flat" text="release date" />
              <Button type="flat" text="rating" />
            </ButtonGroup>
          </div>
        </div>
        <div className="discography">
          {this.renderDiscography()}
        </div>
      </div>
    );
  }
}
export default FilmsCollection;

