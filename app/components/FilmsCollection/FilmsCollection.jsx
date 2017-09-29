import React from 'react';
import PropTypes from 'prop-types';
import FilmItem from '../FilmItem';
import './FilmsCollection.css';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import { Link } from 'react-router-dom'

const FilmsCollection = props => (
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
        <Link to={`/film/${film.show_title}`} key={film.unit}><FilmItem
          id={film.unit}
          posterUrl={film.poster}
          release_year={film.release_year}
          show_title={film.show_title}
          category={film.category}
          director={film.director}
          show_cast={film.show_cast}
          summary={film.summary}
          onClick={id => props.func(id)}
        /></Link>,
      )
      }
    </div>
  </div>
);
FilmsCollection.propTypes = {
  films: PropTypes.array.isRequired,
};

export default FilmsCollection;
