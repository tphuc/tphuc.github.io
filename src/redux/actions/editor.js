/* -----BlogEditor----- */
import * as types from './types'

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

