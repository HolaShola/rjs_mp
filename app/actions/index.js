import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_RECEIVE,
  FETCH_CURRENT_MOVIE_RECEIVE,
  FETCH_SIMILAR_MOVIES_REQUEST,
  GET_SIMILAR_FILMS,
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

export const similarFilms = data => (
  {
    type: GET_SIMILAR_FILMS,
    payload: data,
  }
);

export const similarMoviesRequest = bool => (
  {
    type: FETCH_SIMILAR_MOVIES_REQUEST,
    payload: bool,
  }
);

export const similarMoviesFetchFailure = bool => (
  {
    type: FETCH_SIMILAR_MOVIES_FAILURE,
    payload: bool,
  }
);

export const changeTypeOfSearch = buttonValue => (
  {
    type: CHANGE_TYPE_OF_SEARCH,
    payload: buttonValue,
  }
);

export const getFilms = (searchValue, buttonValueForSearch) => {
  return dispatch => {
    dispatch(moviesRequest(true))
    fetch(`https://api.themoviedb.org/3/search/${buttonValueForSearch}?api_key=4f7821834291015d1ed75fbd1dab475b&query=${searchValue.replace(" ", "+")}`)
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

export const getSimilarFilms = (currentFilmId) => {
  return dispatch => {
    dispatch(similarMoviesRequest(true))
    fetch(`https://api.themoviedb.org/3/movie/${currentFilmId}/similar?api_key=4f7821834291015d1ed75fbd1dab475b`)
      .then(response => {
        //dispatch(similarMoviesRequest(false))
        return response.json()
      })
      .then(data => {
        dispatch(similarFilms(data))
        dispatch(similarMoviesRequest(false))
      });
  }
}