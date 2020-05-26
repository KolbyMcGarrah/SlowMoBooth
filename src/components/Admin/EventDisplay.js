import React, { Component, Fragment } from 'react'
import PropTypes from "prop-types";
import {getEvents} from '../../actions/admin'
import {connect} from "react-redux"
import axios from "axios"

export class EventDisplay extends Component {

    static propTypes = {
        events : PropTypes.object.isRequired,
        getEvents: PropTypes.func.isRequired,
        updateEvent: PropTypes.func.isRequired
    }

    onDelete = (id) => {

        const params = {
            id: id 
        }
        axios
        .delete(`http://localhost:8000/events/delete`,{ params })
        .then((res) => {
            console.log(res)
            return res
        })
        .then(res => {
            this.props.getEvents()
        })
    }

    render() {
        return (
            <Fragment>
                    <label>Venue: {this.props.events.venue}</label>
                    <br/>
                    <label>Contact List: </label>
                    <table>
                        <thead>
                            <tr>
                                <th>Emails</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.events.contactList.emailList.map((email,index) => (
                                <tr key={index}>
                                    <td>{email}</td>
                                </tr>
                            ))}
                        </tbody>    
                    </table>
                    <table>
                        <thead>
                            <tr>
                                <th>Instagram Accounts</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.events.contactList.instagramAccounts.map((instagram,index) => (
                                <tr key={index}>
                                    <td>{instagram}</td>
                                </tr>
                            ))}
                        </tbody>    
                    </table>
                    <table>
                        <thead>
                            <tr>
                                <th>Facebook Accounts</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.events.contactList.facebookAccounts.map((facebook,index) => (
                                <tr key={index}>
                                    <td>{facebook}</td>
                                </tr>
                            ))}
                        </tbody>    
                    </table>
                    <table>
                        <thead>
                            <tr>
                                <th>Twitter Accounts</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.events.contactList.twitterAccounts.map((twitter,index) => (
                                <tr key={index}>
                                    <td>{twitter}</td>
                                </tr>
                            ))}
                        </tbody>    
                    </table>
                    <button className="btn btn-success mr-1" onClick={() => {this.props.updateEvent()}}>Update</button>
                    <button className="btn btn-danger" onClick={() => {this.onDelete(this.props.events._id)}}>Delete</button>
                </Fragment>
        )
    }
}

export default connect(null,{getEvents})(EventDisplay)
