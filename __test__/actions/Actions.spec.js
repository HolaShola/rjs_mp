import * as actions from '../../app/actions';
import * as constants from '../../app/constants';

describe('actions', () => {
  it('should create an action FETCH_MOVIES_REQUEST', () => {
    const isMoviesRequest = true;
    const expectedAction = {
      type: constants.FETCH_MOVIES_REQUEST,
      payload: isMoviesRequest,
    };
    expect(actions.moviesRequest(isMoviesRequest)).toEqual(expectedAction);
  });

  it('should create an action FETCH_MOVIES_RECEIVE', () => {
    const data = 'Hello world';
    const expectedAction = {
      type: constants.FETCH_MOVIES_RECEIVE,
      payload: data,
    };
    expect(actions.moviesReceive(data)).toEqual(expectedAction);
  });

  it('should create an action FETCH_MOVIES_FAILURE', () => {
    const isMoviesFetchFailure = true;
    const expectedAction = {
      type: constants.FETCH_MOVIES_FAILURE,
      payload: isMoviesFetchFailure,
    };
    expect(actions.moviesFetchFailure(isMoviesFetchFailure)).toEqual(expectedAction);
  });

  it('should create an action FETCH_CURRENT_MOVIE_RECEIVE', () => {
    const data = 'Hello world with action FETCH_CURRENT_MOVIE_RECEIVE';
    const expectedAction = {
      type: constants.FETCH_CURRENT_MOVIE_RECEIVE,
      payload: data,
    };
    expect(actions.currentMovieReceive(data)).toEqual(expectedAction);
  });

  it('should create an action GET_SIMILAR_MOVIES', () => {
    const data = 'Hello world with action GET_SIMILAR_MOVIES';
    const expectedAction = {
      type: constants.GET_SIMILAR_MOVIES,
      payload: data,
    };
    expect(actions.similarFilms(data)).toEqual(expectedAction);
  });

  it('should create an action FETCH_SIMILAR_MOVIES_REQUEST', () => {
    const isSimilarMoviesRequest = true;
    const expectedAction = {
      type: constants.FETCH_SIMILAR_MOVIES_REQUEST,
      payload: isSimilarMoviesRequest,
    };
    expect(actions.similarMoviesRequest(isSimilarMoviesRequest)).toEqual(expectedAction);
  });

  it('should create an action CHANGE_TYPE_OF_SEARCH', () => {
    const buttonValue = 'movies';
    const expectedAction = {
      type: constants.CHANGE_TYPE_OF_SEARCH,
      payload: buttonValue,
    };
    expect(actions.changeTypeOfSearch(buttonValue)).toEqual(expectedAction);
  });

  it('should create an action CHANGE_TYPE_OF_SORT', () => {
    const buttonValue = 'sort_by_rating';
    const expectedAction = {
      type: constants.CHANGE_TYPE_OF_SORT,
      payload: buttonValue,
    };
    expect(actions.changeTypeOfSort(buttonValue)).toEqual(expectedAction);
  });
  
});