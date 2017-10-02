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
          <img alt="poster" src={props.currentFilm.poster} />
        </div>
        <div className="header_img_description">
          <div className="show_title">
            <p>{props.currentFilm.show_title}</p>
          </div>
          <div className="film_rating">{props.currentFilm.rating}</div>
          <div>
            <p className="category">{props.currentFilm.category}</p>
          </div>
          <div>
            <p className="release_year film_runtime">
              {props.currentFilm.release_year} {props.currentFilm.runtime}
            </p>
          </div>
          <div className="description">
            {props.currentFilm.summary}
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

FilmDescription.propTypes = {
  currentFilm: PropTypes.object.isRequired,
};

export default FilmDescription;

