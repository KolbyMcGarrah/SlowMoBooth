import React, { Component } from 'react'
import PropTypes from "prop-types";

export class ContactButtons extends Component {
    
    static propTypes = {
        displayForm : PropTypes.func.isRequired
    }
    twitSubmit = e => {
        e.preventDefault()
        this.props.displayForm("Twitter")
    }
    mailSubmit = e => {
        e.preventDefault()
        this.props.displayForm("Email")
    }
    fbSubmit = e => {
        e.preventDefault()
        this.props.displayForm("Facebook")
    }
    instaSubmit = e => {
        e.preventDefault()
        this.props.displayForm("Instagram")
    }
    render() {
        return (
            <div className="btn-group" style={{textAlign:"center"}} role="group" aria-label="Basic example">
                <form onSubmit={this.mailSubmit}>
                    <button type="submit" className="btn btn-outline-light mx-1"><i className="far fa-envelope mx-1"></i>Email</button>
                </form>
                <form onSubmit={this.twitSubmit}>
                    <button type="submit" className="btn btn-outline-info mx-1"><i className="fab fa-twitter mx-1"></i>Twitter</button>
                </form>
                <form onSubmit={this.fbSubmit}>
                    <button type="submit" className="btn btn-outline-primary mx-1"><i className="fab fa-facebook mx-1"></i>Facebook</button>
                </form>
                <form onSubmit={this.instaSubmit}>
                    <button type="submit" className="btn btn-outline-warning mx-1"><i className="fab fa-instagram mx-1" />Instagram</button>
                </form>
            </div>
        )
    }
}

export default ContactButtons
