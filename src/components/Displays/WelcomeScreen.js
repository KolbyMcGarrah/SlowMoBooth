import React, { Component, Fragment } from 'react'
import MainDisplay from './MainDisplay'
import PropTypes from "prop-types"
import { connect } from "react-redux";
import { initializeEvent } from "../../actions/events"

export class WelcomeScreen extends Component {

    static propTypes = {
        initializeEvent: PropTypes.func.isRequired,
        event: PropTypes.object.isRequired
    }

    state = {
        begin: false
    }

    componentDidMount(){
        this.props.initializeEvent()
    }  

    onClick() {
        this.setState({begin:true})
        
    }
    resetWelcome = () => {
        this.setState({begin:false})
    }

    render() {
        const welcome = (
            <div className="container" style={{display:"flex",justifyContent:"center",alignItems:"center", height:"100vh"}}>
                    <div className="card mx-auto offset-3 col-sm-6" >
                        <div className="card-body" onClick={() => {this.onClick()}}>
                            <h3>Welcome to the Slow-Mo-Booth.</h3>
                            <h5>Please take a second to record a short video to help commemorate {this.props.event.eventName}</h5> 
                            <h1>Tap to Begin</h1>    
                        </div>    
                    </div>                
                </div>
        )
        return (
            <Fragment>
                {this.state.begin ? <MainDisplay event={this.props.event} resetWelcome={this.resetWelcome}/> : welcome}
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    event:state.event.event
})

export default connect(mapStateToProps,{initializeEvent})(WelcomeScreen)
