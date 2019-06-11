import axios from 'axios';
import {returnErrors} from './error'

import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAILED, EXCEPTION, USER_LOGOUT, REGISTER_FAILED, REGISTER_SUCCESS } from './types';

export const loadUser = () => (dispatch, getState) => {

    // User Loading
    dispatch({ type: USER_LOADING });

    axios
        .get("/api/auth/user", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: AUTH_ERROR
            });
        });
};

// LOGIN USER
export const login = (username, password) => dispatch => {
    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    // Request Body
    const body = JSON.stringify({ username, password });

    axios
        .post("/api/auth/login", body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            if(err.response){
                dispatch(returnErrors(err.response.data, err.response.status));
            }
            else{
                alert('Server is not responding! Please exit!')
            }
            
            dispatch({
                type: LOGIN_FAILED
            });
        });
};


export const logout = () => (dispatch, getState) => {
    axios
        .post("/api/auth/logout/", null, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOGOUT
            });
        })
        .catch(err => {
            if(err.response){
                dispatch(returnErrors(err.response.data, err.response.status));
            }
            else{
                alert('Server is not responding! Please exit!')
            }
            dispatch({type: EXCEPTION});
        });
};

export const register = ( username, email, password ) => dispatch => {
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    // Request Body
    const body = JSON.stringify({ username, email, password });

    axios
      .post("/api/auth/register", body, config)
      .then(res => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        if(err.response){
            dispatch(returnErrors(err.response.data, err.response.status));
        }
        else{
            alert('Server is not responding! Please exit!')
        }
        dispatch({
            type: REGISTER_FAILED
        });
      })

  };

export const tokenConfig = getState => {
    // Get token from state
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    // If token, add to headers config
    if (token) {
        config.headers["Authorization"] = `Token ${token}`;
    }

    return config;
};
