import React, { Component } from 'react'
import PropTypes from "prop-types";

export class ContactButtons extends Component {
    
    static propTypes = {
        displayForm : PropTypes.func.isRequired
    }
    twitSubmit = e => {
        e.preventDefault()
        this.props.displayForm("twitter")
    }
    fbSubmit = e => {
        e.preventDefault()
        this.props.displayForm("facebook")
    }
    instaSubmit = e => {
        e.preventDefault()
        this.props.displayForm("instagram")
    }
    render() {
        return (
            <div className="btn-group mt-3" role="group" aria-label="Basic example">
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
