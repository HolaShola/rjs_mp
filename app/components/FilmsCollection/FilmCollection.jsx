import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FilmItem from '../FilmItem';
import './FilmCollection.css';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';

const FilmCollection = props => (
  <div className="FilmCollection">
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
      {props.films.map(film =>
        (<Link to={`/film/${film.show_title}`}>
          <FilmItem
            id={film.unit}
            key={film.unit}
            posterUrl={film.poster}
            release_year={film.release_year}
            show_title={film.show_title}
            category={film.category}
            director={film.director}
            show_cast={film.show_cast}
            summary={film.summary}
            onClick={showTitle => props.func(showTitle)}
          />
        </Link>),
      )}
    </div>
  </div>
);
FilmCollection.propTypes = {
  films: PropTypes.array.isRequired,
};

export default FilmCollection;
