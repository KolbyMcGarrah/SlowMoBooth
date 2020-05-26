import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {addEmail} from "../../actions/events"


export class EmailForm extends Component {
    
    static propTypes = {
        displayForm: PropTypes.func.isRequired,
        addEmail: PropTypes.func.isRequired
    }

    state = {
        email:""
    }
    onChange = e => this.setState({ [e.target.name]:e.target.value });
    
    onSubmit = e => {
        const email = this.state.email
        e.preventDefault()
        if (email !== ""){
            console.log(email)
        }
        else{
            console.log("Please fill in an email")
        }
        this.props.displayForm("")
        this.props.addEmail(email)   
    }

    render() {
        const {email} = this.state
        return (
            <form className="form-inline" onSubmit={this.onSubmit}>
                <input 
                    type="email" 
                    className="form-control text-white ml-auto mr-1" 
                    style={{backgroundColor:"rgba(0,0,0,0.5)"}} 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    placeholder="email@domain.com"
                    name="email"
                    value={email}
                    onChange={this.onChange} />
                <button className="btn btn-outline-danger ml-1 mr-auto">Add</button>
            </form>
        )
    }
}

export default connect(null,{addEmail})(EmailForm)
