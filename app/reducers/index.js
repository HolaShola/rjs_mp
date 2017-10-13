import { combineReducers } from 'redux';
import FilmsReducer from './FilmsReducer';
import CurrentFilmReducer from './CurrentFilmReducer';

const appReducer = combineReducers({
  films: FilmsReducer,
  currentFilm: CurrentFilmReducer,
});

export default appReducer;
