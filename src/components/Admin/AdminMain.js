import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import { getEvents } from "../../actions/admin";
import PropTypes from "prop-types"
import EventConroller from "./EventController"
import NewEventForm from "./NewEventForm"

export class AdminMain extends Component {
    
    static propTypes = {
        getEvents: PropTypes.func.isRequired,
        events: PropTypes.array.isRequired
    }

    state = {
        expandBools:[]
    }

    componentDidMount() {
        this.props.getEvents()
    }
    
    setBool = index => {
        let temp = this.state.expandBools
        if(temp[index] === true){
            temp[index] = false
        }
        else{temp[index] = true}
        this.setState({expandBools : temp})
    }


    render() {
        const {expandBools} = this.state
        return (
            <div className="container">
                <NewEventForm />
                <h2>Events</h2>
                    {this.props.events.map((event,index) => (
                        <div className="card mb-2" key={event._id}>
                            <div className="card-header" style={{display:"flex",justifyContent:"space-between"}}>
                                <label>{event.eventName}</label>
                                <button className="btn btn-primary ml-auto" onClick={() => {this.setBool(index)}}>{expandBools[index] ? "-" : "+"}</button>
                            </div>
                            <div className="card-body">
                                {expandBools[index] ? <EventConroller events={this.props.events[index]} /> : <Fragment />}
                            </div>
                        </div>
                    ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    events: state.admin.events
})

export default connect(mapStateToProps,{ getEvents })(AdminMain)
