import React, { Component, Fragment } from 'react'
import {connect} from "react-redux"
import PropTypes from 'prop-types';
import {addInstagram} from "../../actions/events"

export class InstagramForm extends Component {

    static propTypes = {
        displayForm: PropTypes.func.isRequired,
        addInstagram: PropTypes.func.isRequired
    }

    state = {
        instagram:"",
        added:false
    }
    onChange = e => this.setState({ [e.target.name]:e.target.value });
    
    onSubmit = e => {
        const {instagram} = this.state
        e.preventDefault()
        if (instagram !== ""){
            console.log(instagram)
            this.setState({added:true})
        }
        else{
            console.log("Please fill in your instagram account name")
        }
        this.props.displayForm("")
        this.props.addInstagram(instagram)
    }

    onEdit = () => {
        this.setState({added:false})
    }

    remove = () => {
        this.setState({added:false})
        this.props.displayForm("rmInstagram")
    }

    render() {
        const {instagram,added} = this.state
        const edit = (
            <form className="form-inline" onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    className="form-control mr-1" 
                    placeholder="InstagramProfile" 
                    name="instagram"
                    value={instagram}
                    onChange={this.onChange} />
                <button className="btn btn-outline-danger ml-1 mr-auto">Add</button>
            </form>
        )
        const display = (
            <Fragment>
                <label className="mr-1">Instagram : {instagram}</label>
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

export default connect(null,{addInstagram})(InstagramForm)
