export default function CurrentFilmReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.payload,
      ];
    case 'DELETE':
      return [
        ...state.filter(todo => todo !== action.payload)
      ];
    default: return state;
  }
}
