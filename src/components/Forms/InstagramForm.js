import React, { Component } from 'react'
import {connect} from "react-redux"
import PropTypes from 'prop-types';
import {addInstagram} from "../../actions/events"

export class InstagramForm extends Component {

    static propTypes = {
        displayForm: PropTypes.func.isRequired,
        addInstagram: PropTypes.func.isRequired
    }

    state = {
        instagram:""
    }
    onChange = e => this.setState({ [e.target.name]:e.target.value });
    
    onSubmit = e => {
        const {instagram} = this.state
        e.preventDefault()
        if (instagram !== ""){
            console.log(instagram)
        }
        else{
            console.log("Please fill in your instagram account name")
        }
        this.props.displayForm("")
        this.props.addInstagram(instagram)
    }

    render() {
        const {instagram} = this.state
        return (
            <form className="form-inline" onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    className="form-control text-warning ml-auto mr-1 border-warning" 
                    style={{backgroundColor:"rgba(0,0,0,0.5)"}} 
                    placeholder="InstagramProfile" 
                    name="instagram"
                    value={instagram}
                    onChange={this.onChange} />
                <button className="btn btn-outline-danger ml-1 mr-auto">Add</button>
            </form>
        )
    }
}

export default connect(null,{addInstagram})(InstagramForm)
