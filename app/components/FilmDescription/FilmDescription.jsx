import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './FilmDescription.css';
import AppTitle from '../AppTitle';
import Button from '../Button';

const FilmDescription = props => (
  <div className="FilmDescription">
    <div className="header_label">
      <div className="header_label_up">
        <AppTitle />
        <Link to="/">
          <Button type="submit" text="search" />
        </Link>
      </div>
      <div className="header_down">
        <div className="header_img">
          <img alt="poster" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.currentFilm.poster_path}`} />
        </div>
        <div className="header_img_description">
          <div className="show_title">
            <p>{props.currentFilm.original_title}</p>
          </div>
          <div className="film_rating">{props.currentFilm.vote_average}</div>
          <div>
            <p className="category">{props.currentFilm.category}</p>
          </div>
          <div>
            <p className="release_year film_runtime">
              {props.currentFilm.release_date} {props.currentFilm.runtime}
            </p>
          </div>
          <div className="description">
            {props.currentFilm.overview}
          </div>
          <div className="director_cast_list">
            <p>{props.currentFilm.director}</p>
            <p>{props.currentFilm.show_cast}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

FilmDescription.defaultProps = {
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

FilmDescription.propTypes = {
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

export default FilmDescription;

