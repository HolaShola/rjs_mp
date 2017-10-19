const initialState = { buttonValue: "title" };

export default function SearchReducer(state = initialState, action) {
    switch(action.type) {
        case 'CHANGE_BUTTON_VALUE':
            return {
                ...state,
                buttonValue: action.payload
            }
            
        default: return state;     
    }
}