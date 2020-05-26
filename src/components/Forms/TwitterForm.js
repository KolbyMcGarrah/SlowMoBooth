import React, { Component } from 'react'
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {addTwitter} from "../../actions/events"

export class TwitterForm extends Component {

    static propTypes = {
        displayForm: PropTypes.func.isRequired,
        addTwitter: PropTypes.func.isRequired
    }

    state = {
        twitter:""
    }
    onChange = e => this.setState({ [e.target.name]:e.target.value });
    
    onSubmit = e => {
        const {twitter} = this.state
        e.preventDefault()
        if (twitter !== ""){
            console.log(twitter)
        }
        else{
            console.log("Please fill in your instagram account name")
        }
        this.props.displayForm("")
        this.props.addTwitter(twitter)
    }

    render() {
        const {twitter} = this.state
        return (
            <form className="form-inline" onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    className="form-control text-info ml-auto mr-1 border-info" 
                    style={{backgroundColor:"rgba(0,0,0,0.5)"}} 
                    placeholder="@TwitterHandle" 
                    name="twitter"
                    value={twitter}
                    onChange={this.onChange} />
                <button className="btn btn-outline-danger ml-1 mr-auto">Add</button>
            </form>
        )
    }
}

export default connect(null,{addTwitter})(TwitterForm)
