import * as types from '../actions/types'

const initialState = {
    token : localStorage.getItem('token'),
    isAuthenticated : null,
    isLoading : false,
    user : null,
}

const auth = (state = initialState, action) => {

    switch(action.type){
        case types.USER_LOADING:
            return {
                ...state,
                isLoading: true
            };

        case types.USER_LOADED:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                user: action.payload
            };

        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            };
        
        
        case types.USER_LOGOUT:
        case types.LOGOUT_SUCCESS:
        case types.LOGIN_FAILED:
        case types.AUTH_ERROR:
        case types.REGISTER_FAILED:
        localStorage.removeItem('token');
        return {
            ...state,
            token: null,
            user: null,
            isAuthenticated: null,
            isLoading: false
        };
            
            
        default:
            return state
    }
}

export default auth;