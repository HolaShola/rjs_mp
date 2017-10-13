export default function FilmsReducer(state = 0, action) {
  switch (action.type) {
    case 'RECEIVE_DATA':
      return action.payload;
    default: return state;
  }
}
