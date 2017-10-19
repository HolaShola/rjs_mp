export default function FilmsReducer(state = 0, action) {
  switch (action.type) {
    case 'FETCH_MOVIES_RECEIVE':
      return action.payload;
    default: return state;
  }
}
