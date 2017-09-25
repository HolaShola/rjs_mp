import React from 'react';
import PropTypes from 'prop-types';
import './FilmItem.css';

const FilmItem = props => (
  <div className="FilmItem" onClick={() => props.onClick(props.id)} >
    <div>
      <img alt="posterUrl" src={props.posterUrl} width="320" height="450" />
    </div>
    <div className="film_description">
      <div className="release_year">
        <p>{props.release_year}</p>
      </div>
      <div className="show_title">
        <p>{props.show_title}</p>
      </div>
      <div className="category">
        <p>{props.category}</p>
      </div>
    </div>
  </div>
);

FilmItem.propTypes = {
  id: PropTypes.number.isRequired,
  posterUrl: PropTypes.string.isRequired,
  show_title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  release_year: PropTypes.string.isRequired,
};

export default FilmItem;
