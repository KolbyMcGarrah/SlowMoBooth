import {
    GET_EVENTS
} from "../actions/types";

const initialState = {
    events : [],
    currentEvent : {}
}

export default function (state = initialState,action) {
    switch(action.type) {
        case GET_EVENTS:
            return {
                events : action.payload,
                currentEvent : {...state.currentEvent}
            }
        default:
            return{ 
                ...state
            }
    }
}