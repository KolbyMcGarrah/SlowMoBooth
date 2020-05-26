import React, { Component } from 'react'
import axios from "axios";
import {connect} from "react-redux";
import { getEvents } from "../../actions/admin";
import PropTypes from "prop-types"

export class NewEventForm extends Component {

    static propTypes = {
        getEvents: PropTypes.func.isRequired
    }

    state = {
        eventName:"",
        venue:"",
    }

    onSubmit = e => {
        e.preventDefault()
        this.setState({
            eventName:"",
            venue:"",
        })
        const {eventName, venue} = this.state
        const body = JSON.stringify({eventName,venue})
        const config = { headers: {'Content-Type': 'application/json'} }
        axios
        .post("http://localhost:8000/events/add",body,config)
        .then(() => {
            this.props.getEvents()
        })
    }

    onChange = e => this.setState({ [e.target.name]:e.target.value });

    render() {
        const {eventName, venue} = this.state
        return (
            <div className="my-3">
                <div className="card card-body mt-5">
                    <h2 className="text-center">Create Event</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Event Name</label>
                            <input 
                                type="text"
                                className="form-control"
                                name="eventName"
                                onChange={this.onChange}
                                value={eventName}
                            />
                        </div>
                        <div className="form-group">
                            <label>Venue</label>
                            <input 
                                type="text"
                                className="form-control"
                                name="venue"
                                onChange={this.onChange}
                                value={venue}
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-outline-primary">
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null,{getEvents})(NewEventForm)
