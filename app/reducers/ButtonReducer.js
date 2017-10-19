const initialState = {activeIndex: 0}

export default function ButtonReducer(state = initialState, action) {
    switch(action.type) {
        case 'CHANGE_BUTTON':
            return {
                ...state,
                activeIndex: action.payload
            }
            
        default: return state;     
    }
}