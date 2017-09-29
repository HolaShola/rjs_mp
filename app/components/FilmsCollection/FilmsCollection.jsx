import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FilmItem from '../FilmItem';
import './FilmsCollection.css';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';

const FilmsCollection = props => (
  <div className="FilmsCollection">
    <div className="sort">
      <div className="search_number_result">
        <p>movies found</p>
      </div>
      <div className="sort_by">
        <ButtonGroup label="sort by">
          <Button type="submit" text="release date" />
          <Button type="submit" text="rating" />
        </ButtonGroup>
      </div>
    </div>
    <div className="discography">
      {props.films.message
        ? props.films.message
        :
        props.films.map(film =>
          (<Link to={`/film/title=${film.show_title}&director=${film.director}`} key={film.unit}><FilmItem
            id={film.unit}
            posterUrl={film.poster}
            release_year={film.release_year}
            show_title={film.show_title}
            category={film.category}
            director={film.director}
            show_cast={film.show_cast}
            summary={film.summary}
          /></Link>),
        )}
    </div>
  </div>
);
FilmsCollection.propTypes = {
  films: PropTypes.array.isRequired,
};

export default FilmsCollection;
