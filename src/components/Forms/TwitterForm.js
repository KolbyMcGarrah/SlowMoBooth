import React, { Component, Fragment } from 'react'
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {addTwitter} from "../../actions/events"

export class TwitterForm extends Component {

    static propTypes = {
        displayForm: PropTypes.func.isRequired,
        addTwitter: PropTypes.func.isRequired
    }

    state = {
        twitter:"",
        added: false
    }
    onChange = e => this.setState({ [e.target.name]:e.target.value });
    
    onSubmit = e => {
        const {twitter} = this.state
        e.preventDefault()
        if (twitter !== ""){
            console.log(twitter)
            this.setState({added:true})
        }
        else{
            console.log("Please fill in your instagram account name")
        }
        this.props.displayForm("")
        this.props.addTwitter(twitter)
    }

    onEdit = () => {
        this.setState({added:false})
    }

    remove = () => {
        this.props.displayForm("rmTwitter")
    }

    render() {
        const {twitter,added} = this.state
        const edit = (
            <form className="form-inline" onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    className="form-control mr-1"
                    placeholder="@TwitterHandle" 
                    name="twitter"
                    value={twitter}
                    onChange={this.onChange} />
                <button className="btn btn-outline-danger ml-1 mr-auto">Add</button>
            </form>
        )
        const display = (
            <Fragment>
                <label className="mr-1">Twitter: {twitter}</label>
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

export default connect(null,{addTwitter})(TwitterForm)
