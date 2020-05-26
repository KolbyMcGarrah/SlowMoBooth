import React, { Component } from 'react'
import axios from "axios";
import {connect} from "react-redux";
import { getEvents } from "../../actions/admin";
import PropTypes from "prop-types"

export class UpdateForm extends Component {

    static propTypes = {
        getEvents: PropTypes.func.isRequired,
        events: PropTypes.object.isRequired,
        displayEvent : PropTypes.func.isRequired
    }

    state = {
        id: this.props.events._id,
        eventName:this.props.events.eventName,
        venue:this.props.events.venue,
        active: this.props.events.active
    }

    onSubmit = e => {
        e.preventDefault()
        const {eventName, venue, id, active} = this.state
        const body = JSON.stringify({eventName,venue, id, active})
        const config = { headers: {'Content-Type': 'application/json'} }
        axios
        .put("http://localhost:8000/events/change",body,config)
        .then(() => {
            this.props.getEvents()
        })
        .then(() => {
            this.props.displayEvent()
        })
    }

    onChange = e => {
    e.target.name === 'active' ? this.setState({ [e.target.name]:e.target.checked }) :
    this.setState({ [e.target.name]:e.target.value });

    } 
    render() {
        const {eventName, venue, active} = this.state
        return (
            <div className="my-3">
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
                            <label>Active</label>
                            <input 
                                name="active" 
                                type="checkbox" 
                                checked={active} 
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-outline-primary">
                                Update
                            </button>
                            <button onClick={() => {this.props.displayEvent()}} className="btn btn-outline-danger">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
        )
    }
}

export default connect(null,{getEvents})(UpdateForm)
