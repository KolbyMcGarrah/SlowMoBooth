import { GET_EVENTS } from "./types";
import axios from "axios";

export const getEvents = () => (dispatch) => {
    axios.get("http://localhost:8000/events/")
    .then(res => {
        dispatch({
            type: GET_EVENTS,
            payload: res.data
        })
        return res
    })
}

export const deleteEvents = (id) => (dispatch) => {
    const params = {
        id: id 
    }
    axios
    .delete(`http://localhost:8000/events/delete`,{ params })
}