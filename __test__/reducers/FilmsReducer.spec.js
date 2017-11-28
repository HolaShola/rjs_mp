import * as types from '../../app/constants';
import FilmsReducer from '../../app/reducers/FilmsReducer';

const currentFilm = {
  release_date: '2015-05-13',
  poster_path: '/kqjL17yufvn9OVLyXYpvtyrFfak.jpg',
  original_title: 'Mad Max: Fury Road',
  id: 76341,
  vote_average: 7.3,
}

describe('FilmsReducer', () => {
  it('should handle initial state', () => {
    expect(
      FilmsReducer(undefined, {}),
    ).toEqual({
      films: [],
      isFetching: false,
      currentFilm: '',
      similarFilms: [],
      isFetchingForSimilarFilms: false,
      typeOfSort: 'release_date',
    });
  });

  it('should handle action FETCH_MOVIES_RECEIVE', () => {
    expect(
      FilmsReducer(undefined, {
        type: types.FETCH_MOVIES_RECEIVE,
        payload: ['Kill Bill', 'Mad Max'],
      }),
    ).toEqual({
      films: ['Kill Bill', 'Mad Max'],
      isFetching: false,
      currentFilm: '',
      similarFilms: [],
      isFetchingForSimilarFilms: false,
      typeOfSort: 'release_date',
    });
  });

  it('should handle action FETCH_MOVIES_REQUEST', () => {
    expect(
      FilmsReducer(undefined, {
        type: types.FETCH_MOVIES_REQUEST,
        payload: true,
      }),
    ).toEqual({
      films: [],
      isFetching: true,
      currentFilm: '',
      similarFilms: [],
      isFetchingForSimilarFilms: false,
      typeOfSort: 'release_date',
    });
  });

  it('should handle action FETCH_CURRENT_MOVIE_RECEIVE', () => {
    expect(
      FilmsReducer(undefined, {
        type: types.FETCH_CURRENT_MOVIE_RECEIVE,
        payload: currentFilm,
      }),
    ).toEqual({
      films: [],
      isFetching: false,
      currentFilm: currentFilm,
      similarFilms: [],
      isFetchingForSimilarFilms: false,
      typeOfSort: 'release_date',
    });
  });

  it('should handle action GET_SIMILAR_MOVIES', () => {
    expect(
      FilmsReducer(undefined, {
        type: types.GET_SIMILAR_MOVIES,
        payload: [{}, {}, {}],
      }),
    ).toEqual({
      films: [],
      isFetching: false,
      currentFilm: '',
      similarFilms: [{}, {}, {}],
      isFetchingForSimilarFilms: false,
      typeOfSort: 'release_date',
    });
  });

  it('should handle action FETCH_SIMILAR_MOVIES_REQUEST', () => {
    expect(
      FilmsReducer(undefined, {
        type: types.FETCH_SIMILAR_MOVIES_REQUEST,
        payload: true,
      }),
    ).toEqual({
      films: [],
      isFetching: false,
      currentFilm: '',
      similarFilms: [],
      isFetchingForSimilarFilms: true,
      typeOfSort: 'release_date',
    });
  });

  it('should handle action CHANGE_TYPE_OF_SORT', () => {
    expect(
      FilmsReducer(undefined, {
        type: types.CHANGE_TYPE_OF_SORT,
        payload: 'rating',
      }),
    ).toEqual({
      films: [],
      isFetching: false,
      currentFilm: '',
      similarFilms: [],
      isFetchingForSimilarFilms: false,
      typeOfSort: 'rating',
    });
  });
});
