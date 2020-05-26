import React, { Component, Fragment } from 'react'
import ContactButtons from "./ContactButtons";
import { connect } from 'react-redux'
import FormController from "../Forms/FormController"
import PropTypes from "prop-types"
import { initializeEvent } from "../../actions/events"
import CompleteEvent from "../Forms/CompleteEvent"

export class MainDisplay extends Component {

    static propTypes = {
        initializeEvent: PropTypes.func.isRequired,
        event: PropTypes.object.isRequired
    }

    state = {
        formDisplay:"",
    }

    displayForm = formType => {
        this.setState({formDisplay:formType})
    }

    componentDidMount(){
        this.props.initializeEvent()
    }  

    onSubmit = e => {
        e.preventDefault()
        this.displayForm("")
    }
    render() {
        const formDisplay = this.state.formDisplay
        const event = this.props.event
        const activeEvent = (
            <Fragment>
            <div className="text-white">
                <h2>Thanks for being a part of {`${event.eventName}`}</h2>
                    <h4 className="mt-3">We are going to be making a super slow motion video 
                    to show the newly weds how much fun everyone had on their big day. 
                    If you would like to see the final edited video, 
                    add your email or favorite social media profile below.</h4>
                </div>
                <ContactButtons displayForm={this.displayForm}/>
                <FormController formDisplay={formDisplay} displayForm={this.displayForm} />
                <form className="my-3" onSubmit={this.onSubmit}>
                    <h5 className="text-white">Select start video below to record your groups' slow-mo-segment.</h5>
                    <button className="btn btn-outline-success"><i className="fas fa-play mx-1"></i>Start Video</button>
                </form>
                <CompleteEvent />
                </Fragment>
        )
        return (
            <div className="p-5 my-5 border border-primary" style={{textAlign:"center", backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
                {event.eventName  ? activeEvent : activeEvent}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    event:state.event.event
})

export default connect(mapStateToProps,{initializeEvent})(MainDisplay)
