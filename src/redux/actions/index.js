/* -----BlogEditor----- */
import * as types from './types'
import axios from 'axios'
// Blog Editor
export const htmlEditorChange = (html) => {
    return {
        type: types.HTML_EDITOR_CHANGE,
        payload:{
            html: html
        }
    }
}

export const openEditor = () => {
    return {
        type: types.OPEN_EDITOR,
        payload:{
            bool: true
        }
    }
}

export const closeEditor = () => {
    return{
        type: types.CLOSE_EDITOR,
        payload:{
            bool: false
        }
    }
}

// Button
export const submitAricleContent = (html) => {
    return {
        type: types.SUBMIT_ARTICLE,
        payload:{
            html: html
        }
    }
}

// Authentication
export const authStart = () => {
    return{
        type: types.AUTH_START
    }
}

export const authSuccess = (token) => {
    return {
        type: types.AUTH_SUCCESS,
        payload: {
            token: token
        }
    }
}

export const authFail = (error) => {
    return {
        type: types.AUTH_FAIL,
        payload:{
            error: error
        }
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type: types.AUTH_LOGOUT
    }
}
export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 100)
    }
}
export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://localhost/rest-auth/login/', {
            username: username,
            password: password
        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600))
        })
        .catch(err => {
            dispatch(authFail(err))
        })

    }
}
