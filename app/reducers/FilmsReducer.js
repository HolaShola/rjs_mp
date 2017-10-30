const initialState = {
  films: [],
  isFetching: false,
  currentFilm: "",
  similarFilms: [],
  isFetchingForSimilarFilms: false,
};

export default function FilmsReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_MOVIES_RECEIVE':
      return {
        ...state,
        films: action.payload
      }
    case 'FETCH_MOVIES_REQUEST':
      return {
        ...state,
        isFetching: action.payload
      }
    case 'FETCH_CURRENT_MOVIE_RECEIVE':
      return {
        ...state,
        currentFilm: action.payload
      } 
    case 'GET_SIMILAR_FILMS':
      return {
        ...state,
        similarFilms: action.payload
      }
    case 'FETCH_SIMILAR_MOVIES_REQUEST':
      return {
        ...state,
        isFetchingForSimilarFilms: action.payload
      }
    default: return state;
  }
}
