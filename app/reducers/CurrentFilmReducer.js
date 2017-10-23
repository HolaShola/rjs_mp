export default function CurrentFilmReducer(state = 0, action) {
  switch (action.type) {
    case 'FETCH_CURRENT_MOVIE_RECEIVE':
      return action.payload;
    default: return state;
  }
}
