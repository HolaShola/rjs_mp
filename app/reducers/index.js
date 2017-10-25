import { combineReducers } from 'redux';
import FilmsReducer from './FilmsReducer';
import CurrentFilmReducer from './CurrentFilmReducer';
import isFetchingReducer from './isFetchingReducer';
import ButtonReducer from './ButtonReducer';

const appReducer = combineReducers({
  films: FilmsReducer,
  currentFilm: CurrentFilmReducer,
  isFetching: isFetchingReducer,
  buttonValueForSearch: ButtonReducer,
});

export default appReducer;
