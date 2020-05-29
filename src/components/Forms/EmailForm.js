import React, { Component, Fragment } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {addEmail} from "../../actions/events"


export class EmailForm extends Component {
    
    static propTypes = {
        displayForm: PropTypes.func.isRequired,
        addEmail: PropTypes.func.isRequired
    }

    state = {
        email:"",
        added:false
    }
    onChange = e => this.setState({ [e.target.name]:e.target.value });
    
    onSubmit = e => {
        const email = this.state.email
        e.preventDefault()
        if (email !== ""){
            console.log(email)
            this.setState({added:true})
        }
        else{
            console.log("Please fill in an email")
        }
        this.props.displayForm("")
        this.props.addEmail(email)   
    }

    editEmail = () => {
        this.setState({added:false})
    }

    render() {
        const {email} = this.state
        const form = (
            <form className="form-inline" onSubmit={this.onSubmit}>
                <label className="mr-1">Email</label>
                <input 
                    type="email" 
                    className="form-control mr-1"
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    placeholder="email@domain.com"
                    name="email"
                    value={email}
                    onChange={this.onChange} />
                <button className="btn btn-outline-danger ml-1 mr-auto">Add</button>
            </form>
        )
        const display = (
            <Fragment>
                <label>Email: {email}</label>
                <button onClick={this.editEmail} className="btn btn-outline-info ml-1">Edit</button>
            </Fragment>
        )
        const added = this.state.added
        return (
            <Fragment>
                {added ? display : form}
            </Fragment>
        )
    }
}

export default connect(null,{addEmail})(EmailForm)
