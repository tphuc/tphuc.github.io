import * as types from '../actions/types';

const reducer = (state, action) => {
    switch(action.type){

        case types.SUBMIT_ARTICLE:
            return {
                ...state,
                editorContent: action.payload.html
            }

        case types.HTML_EDITOR_CHANGE:
            return {
                ...state,
                editorContent: action.payload.html
            }

        case types.OPEN_EDITOR:
            return {
                ...state,
                editorOpen: action.payload.bool
            }
    
        case types.CLOSE_EDITOR:
            return {
                ...state,
                editorOpen: action.payload.bool
            }
        
        default:
            return state
    }
}

export default reducer;