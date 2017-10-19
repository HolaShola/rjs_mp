const initialState = false;

export default function SearchReducer(state = initialState, action) {
    switch(action.type) {
        case 'FETCH_MOVIES_REQUEST':
          return action.payload
        default: return state;     
    }
}
