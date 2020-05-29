import React, { Component, Fragment } from 'react'
import PropTypes from "prop-types"
import { connect } from 'react-redux';
import {addFacebook} from "../../actions/events"

export class FacebookForm extends Component {
    
    static propTypes = {
        displayForm: PropTypes.func.isRequired,
        addFacebook: PropTypes.func.isRequired
    }

    state = {
        facebook:"",
        added:false
    }
    onChange = e => this.setState({ [e.target.name]:e.target.value });
    
    onSubmit = e => {
        const {facebook} = this.state
        e.preventDefault()
        if (facebook !== ""){
            console.log(facebook)
            this.setState({added:true})
        }
        else{
            console.log("Please fill in your facebook account name")
        }
        this.props.displayForm("")
        this.props.addFacebook(facebook)
    }

    remove = () => {
        this.setState({added:false})
        this.props.displayForm("rmFacebook")
    }

    onEdit = () => {
        this.setState({added:false})
    }

    render() {
        const {facebook,added} = this.state
        const edit = (
            <form className="form-inline" onSubmit={this.onSubmit}>
                <label className="mr-1">Facebook</label>
                <input 
                    type="text" 
                    className="form-control text-primary mr-1 border-primary"
                    placeholder="Facebook Account"
                    name="facebook"
                    value={facebook}
                    onChange={this.onChange} />
                <button className="btn btn-outline-danger ml-1 mr-auto">Add</button>
            </form>
        )
        const display = (
            <Fragment>
                <label className="mr-1">Facebook: {facebook}</label>
                <button onClick={this.onEdit} className="btn btn-outline-info">Edit</button>
            </Fragment>
        )
        return (
            
            <div className="my-3" style={{display:"flex", alignItems:"flex-end"}}>
                {added ? display : edit}
                <button className="btn btn-outline-danger mx-1" onClick={this.remove}>Delete</button>
            </div>
        )
    }
}

export default connect(null,{addFacebook})(FacebookForm)
