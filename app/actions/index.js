import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_RECEIVE,
  FETCH_CURRENT_MOVIE_RECEIVE,
  CHANGE_TYPE_OF_SEARCH,
} from '../constants';

export const moviesRequest = bool => (
  {
    type: FETCH_MOVIES_REQUEST,
    payload: bool,
  }
);

export const moviesReceive = data => (
  {
    type: FETCH_MOVIES_RECEIVE,
    payload: data,
  }
);

export const moviesFetchFailure = bool => (
  {
    type: FETCH_MOVIES_FAILURE,
    payload: bool,
  }
);

export const currentMovieReceive = data => (
  {
    type: FETCH_CURRENT_MOVIE_RECEIVE,
    payload: data,
  }
);

export const changeTypeOfSearch = buttonValue => (
  {
    type: CHANGE_TYPE_OF_SEARCH,
    payload: buttonValue,
  }
);

export const getFilms = (searchValue) => {
  console.log(searchValue);
  return dispatch => {
    dispatch(moviesRequest(true))
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=4f7821834291015d1ed75fbd1dab475b&query=${searchValue.replace(" ", "+")}`)
      .then(response => {
        dispatch(moviesRequest(false))
        return response.json()
      })
      .then(data => {
        dispatch(moviesReceive(data.results))
      });
  }
}

export const getCurrentFilm = (currentFilmId) => {
  return dispatch => {
    dispatch(moviesRequest(true))
    fetch(`https://api.themoviedb.org/3/movie/${currentFilmId}?api_key=4f7821834291015d1ed75fbd1dab475b`)
      .then(response => {
        dispatch(moviesRequest(false))
        return response.json()
      })
      .then(data => {
        dispatch(currentMovieReceive(data))
      });
  }
}