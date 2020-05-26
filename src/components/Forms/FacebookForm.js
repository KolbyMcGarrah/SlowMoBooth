import React, { Component } from 'react'
import PropTypes from "prop-types"
import { connect } from 'react-redux';
import {addFacebook} from "../../actions/events"

export class FacebookForm extends Component {
    
    static propTypes = {
        displayForm: PropTypes.func.isRequired,
        addFacebook: PropTypes.func.isRequired
    }

    state = {
        facebook:""
    }
    onChange = e => this.setState({ [e.target.name]:e.target.value });
    
    onSubmit = e => {
        const {facebook} = this.state
        e.preventDefault()
        if (facebook !== ""){
            console.log(facebook)
        }
        else{
            console.log("Please fill in your facebook account name")
        }
        this.props.displayForm("")
        this.props.addFacebook(facebook)
    }

    render() {
        const {facebook} = this.state
        return (
            <form className="form-inline" onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    className="form-control text-primary ml-auto mr-1 border-primary" 
                    style={{backgroundColor:"rgba(0,0,0,0.5)"}} 
                    placeholder="Facebook Account"
                    name="facebook"
                    value={facebook}
                    onChange={this.onChange} />
                <button className="btn btn-outline-danger ml-1 mr-auto">Add</button>
            </form>
        )
    }
}

export default connect(null,{addFacebook})(FacebookForm)
