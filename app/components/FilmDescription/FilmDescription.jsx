import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './FilmDescription.css';
import AppTitle from '../AppTitle';
import Button from '../Button';
import { mockPoster, constantPartOfURL } from '../../../config';

const FilmDescription = props => (
  <div className={styles.FilmDescription}>
    <div className={styles.header_label}>
      <div className={styles.header_label_up}>
        <AppTitle />
        <Link to="/">
          <Button type="submit" text="search" />
        </Link>
      </div>
      <div className={styles.header_down}>
        <div className={styles.header_img}>
          <img
            alt="poster"
            src={props.currentFilm.poster_path
              ? `${constantPartOfURL}${props.currentFilm.poster_path}`
              : `${mockPoster}`
            }
          />
        </div>
        <div className={styles.header_img_description}>
          <div className={styles.show_title}>
            <p>{props.currentFilm.original_title}</p>
          </div>
          <div className={styles.film_rating}>{props.currentFilm.vote_average}</div>
          <div>
            <p className={styles.category}>{props.currentFilm.category}</p>
          </div>
          <div>
            <p className={styles.release_year}>
              {props.currentFilm.release_date} {props.currentFilm.runtime}
            </p>
          </div>
          <div className={styles.description}>
            {props.currentFilm.overview}
          </div>
          <div className={styles.director_cast_list}>
            <p>{props.currentFilm.director}</p>
            <p>{props.currentFilm.show_cast}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);


FilmDescription.propTypes = {
//  currentFilm: PropTypes.func.isRequired,
};

PropTypes.shape({
  poster_path: PropTypes.string.isRequired,
  original_title: PropTypes.string.isRequired,
  vote_average: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  show_cast: PropTypes.string.isRequired,
});

export default FilmDescription;

