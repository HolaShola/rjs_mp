import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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
    if (this.props.isFetching) {
      return (<Loader />);
    } else {
      if (Array.isArray(this.props.films)) {
        return this.props.films.map(film =>
          <Link to={encodeURI(encodeURI(`/film/title=${film.original_title}`))} replace key={film.id}>
            <FilmItem
              id={film.id}
              posterUrl={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${film.poster_path}`}
              release_year={film.release_date}
              show_title={film.original_title}
              category={film.category}
              director={film.director}
              show_cast={film.show_cast}
              summary={film.overview}
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

function mapStateToProps(state) {
  return {
    isFetching: state.isFetching,
  }
}

function mapActionsToProps(dispatch) {
  return {
    
  }
}

export default connect(mapStateToProps, mapActionsToProps)(FilmsCollection);