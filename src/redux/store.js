import editor from  './reducers/editor';
import auth from './reducers/auth';
import error from './reducers/error';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';


const reducer = combineReducers({auth: auth, editor: editor, error: error});
const store = createStore(reducer, {}, applyMiddleware(thunk));
export default store;