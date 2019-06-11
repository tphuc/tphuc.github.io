import reducer from  './reducers/index'
import { createStore } from 'redux'

const initialState = {
    editorContent: '',
    editorOpen: false,
}

const store = createStore(reducer, initialState);
export default store;