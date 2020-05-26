import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios"
import { initializeEvent } from "../../actions/events"


export class CompleteEvent extends Component {

    static propTypes = {
        event: PropTypes.object.isRequired,
        twitter: PropTypes.array.isRequired,
        email:PropTypes.array.isRequired,
        facebook:PropTypes.array.isRequired,
        instagram: PropTypes.array.isRequired,
        initializeEvent : PropTypes.func.isRequired
    }

    onClick = () => {
        const instagram = this.props.instagram
        const facebook = this.props.facebook
        const twitter = this.props.twitter
        const email = this.props.email
        const id = this.props.event._id
        const body = JSON.stringify({instagram,facebook,twitter,email,id})
        const config = { headers: {'Content-Type': 'application/json'} }
        console.log(config)
        console.log(body)
        axios.put(`http://localhost:8000/events/update`,body,config)
        .then( () => {
            initializeEvent()
        })
    }


    render() {
        return (
            <div>
                <button className='btn btn-outline-danger' onClick={this.onClick}>Complete Event</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    event:state.event.event,
    twitter: state.event.twitter,
    facebook: state.event.facebook,
    instagram: state.event.instagram,
    email: state.event.email
}
)

export default connect(mapStateToProps,{initializeEvent})(CompleteEvent)
