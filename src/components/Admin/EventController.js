import React, { Component, Fragment} from 'react'
import PropTypes from "prop-types"
import EventDisplay from './EventDisplay'
import UpdateForm  from './UpdateForm'

export class EventController extends Component {
    static propTypes = {
        events: PropTypes.object.isRequired
    }

    state = {
        updateEvent:false
    }

    updateEvent = () => {
        this.setState({updateEvent:true})
    }

    displayEvent = () => {
        this.setState({updateEvent:false})
    }

    render() {
        const {updateEvent} = this.state
        return (
            <Fragment>
                {updateEvent ? <UpdateForm events={this.props.events} displayEvent={this.displayEvent}/> : <EventDisplay events={this.props.events} updateEvent={this.updateEvent}/>}
            </Fragment>
        )
    }
}

export default EventController
