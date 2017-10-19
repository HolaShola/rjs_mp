import { combineReducers } from 'redux';
import FilmsReducer from './FilmsReducer';
import CurrentFilmReducer from './CurrentFilmReducer';
import isFetchingReducer from './isFetchingReducer';

const appReducer = combineReducers({
  films: FilmsReducer,
  currentFilm: CurrentFilmReducer,
  isFetching: isFetchingReducer, 
});

export default appReducer;
