import {
    INITIALIZE_EVENT,
    ADD_TWITTER,
    ADD_FACEBOOK,
    ADD_INSTAGRAM,
    ADD_EMAIL
} from "./types";

import axios from "axios";

export const initializeEvent = () => (dispatch) => {
    axios.get("http://localhost:8000/events/active")
    .then(res => {
        dispatch({
            type:INITIALIZE_EVENT,
            payload:res.data
        })
    })
};

export const addEmail = (email) => (dispatch) => {
    dispatch({
        type:ADD_EMAIL,
        payload:email
    })
}

export const addFacebook = (facebook) => (dispatch) => {
    dispatch({
        type:ADD_FACEBOOK,
        payload:facebook
    })
}

export const addInstagram = (instagram) => (dispatch) => {
    dispatch({
        type:ADD_INSTAGRAM,
        payload:instagram
    })
}

export const addTwitter = (twitter) => (dispatch) => {
    dispatch({
        type:ADD_TWITTER,
        payload:twitter
    })
}
