import * as types from '../actions/types';

const initialState = {
    isClose : false,
    content: ''
}
const reducer = (state = initialState, action) => {
    switch(action.type){

        case types.SUBMIT_ARTICLE:
            return {
                ...state,
                content: action.payload.html
            }

        case types.HTML_EDITOR_CHANGE:
            return {
                ...state,
                content: action.payload.html
            }

        case types.OPEN_EDITOR:
            return {
                ...state,
                editorOpen: true
            }
    
        case types.CLOSE_EDITOR:
            return {
                ...state,
                editorOpen: false
            }
        
        default:
            return state
    }
}

export default reducer;