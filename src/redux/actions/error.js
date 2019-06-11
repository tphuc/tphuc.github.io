import { GET_ERRORS, CREATE_MESSAGES } from '../actions/types';

export const createMessages = (msg) => {
    return {
        type: CREATE_MESSAGES,
        payload: msg
    }
}

export const returnErrors = (msg, status) => {
    return {
        type: GET_ERRORS,
        payload:{
            msg, status
        }
    }
}