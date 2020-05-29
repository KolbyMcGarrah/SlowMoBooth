import React, { Component, Fragment } from 'react'
import PropTypes from "prop-types";
import FacebookForm from "./FacebookForm";
import InstagramForm from "./InstagramForm";
import TwitterForm from "./TwitterForm";

export class FormController extends Component {
    static propTypes = {
        instagramDisplay : PropTypes.bool.isRequired,
        twitterDisplay: PropTypes.bool.isRequired,
        facebookDisplay: PropTypes.bool.isRequired,
        displayForm: PropTypes.func.isRequired
    }


    render() {
        return (
                <Fragment>
                {this.props.facebookDisplay ? <FacebookForm displayForm={this.props.displayForm} /> : <Fragment /> }
                    {this.props.twitterDisplay ? <TwitterForm displayForm={this.props.displayForm} /> : <Fragment /> }
                    {this.props.instagramDisplay ? <InstagramForm displayForm={this.props.displayForm} /> : <Fragment /> }
                </Fragment>
        )
    }
}

export default FormController
