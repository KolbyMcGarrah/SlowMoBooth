import React, { Component, Fragment } from 'react'
import PropTypes from "prop-types";
import EmailForm from "./EmailForm";
import FacebookForm from "./FacebookForm";
import InstagramForm from "./InstagramForm";
import TwitterForm from "./TwitterForm";

export class FormController extends Component {
    static propTypes = {
        formDisplay: PropTypes.string.isRequired,
        displayForm: PropTypes.func.isRequired
    }


    render() {
        return (
            <div className="mt-3">
                {this.props.formDisplay === "Email" ? <EmailForm displayForm={this.props.displayForm}/> :
                this.props.formDisplay === "Facebook" ? <FacebookForm displayForm={this.props.displayForm}/>:
                this.props.formDisplay === "Instagram" ? <InstagramForm displayForm={this.props.displayForm}/> :
                this.props.formDisplay === "Twitter" ? <TwitterForm displayForm={this.props.displayForm}/> :
                <Fragment />}
            </div>
        )
    }
}

export default FormController
