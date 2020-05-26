import {
    INITIALIZE_EVENT,
    ADD_TWITTER,
    ADD_FACEBOOK,
    ADD_INSTAGRAM,
    ADD_EMAIL
} from "../actions/types";

const initialState = {
    event: {},
    twitter: [],
    facebook: [],
    instagram: [],
    email: []
}

export default function (state = initialState,action) {
    switch(action.type) {
        case INITIALIZE_EVENT:
            return{
                ...state,
                event: action.payload
            }
        case ADD_TWITTER:
            return{
                ...state,
                twitter: [...state.twitter, action.payload]
            }
        case ADD_FACEBOOK:
            return{
                ...state,
                facebook: [...state.facebook, action.payload]
            }
        case ADD_EMAIL:
            return{
                ...state,
                email: [...state.email, action.payload]
            }
        case ADD_INSTAGRAM:
            return{
                ...state,
                instagram: [...state.instagram, action.payload]
            }
        default:
            return{
                ...state
            }
    }
}