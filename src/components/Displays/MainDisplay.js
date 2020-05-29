import React, { Component, Fragment } from 'react'
import GroupMemberForm from "../Forms/GroupMemberForm"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import axios from "axios"

export class MainDisplay extends Component {

    static propTypes = {
        event: PropTypes.object.isRequired,
        instagram: PropTypes.array.isRequired,
        twitter: PropTypes.array.isRequired,
        facebook: PropTypes.array.isRequired,
        email: PropTypes.array.isRequired,
    }

    state = {
        group:[0],
        curVal:0
    }

    addGroupMember = () => {
        let tempGroup = this.state.group
        const curVal = this.state.curVal + 1
        tempGroup.push(curVal)
        this.setState({group:tempGroup,curVal:curVal})
    }

    removeGroupMember = (index) => {
        let tempGroup = this.state.group
        if (tempGroup.length > 1){
            tempGroup.splice(index,1)
        }
        this.setState({group:tempGroup})
    }

    onSubmit = e => {
        e.preventDefault()
        const instagram = this.props.instagram
        const facebook = this.props.facebook
        const twitter = this.props.twitter
        const email = this.props.email
        const id = this.props.event._id
        console.log('here')
        const body = JSON.stringify({instagram,facebook,twitter,email,id})
        const config = { headers: {'Content-Type': 'application/json'} }
        console.log(config)
        console.log(body)
        axios.put(`http://localhost:8000/events/update`,body,config)
    }
 
    render() {
        return (
            <div style={{display:"flex",justifyContent:"center",alignItems:"center", height:"100vh"}}>
                <div>
                    <div style={{textAlign:"center"}}>
                        <h5>Add email/socials for each person to be able to receive a copy of your video.</h5>
                        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                            <form className="my-3" onSubmit={this.onSubmit}>
                                <button className="btn btn-outline-success mx-1"><i className="fas fa-play mx-1"></i>Start Video</button>
                            </form>
                            <div>
                                <button className='btn btn-primary mx-1' onClick={this.addGroupMember}>Add Person</button>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{flexShrink:'0'}}>
                        {this.state.group.map((group,index) => (
                            <div key={group} className="col-md-8 offset-2">
                                <div className="card">
                                    <div className="card-header" style={{display:"flex",justifyContent:"space-between"}}>
                                        <h5>Person {index+1}</h5>
                                        {index === 0 ? <Fragment />:<button className="btn btn-danger" onClick={() => {this.removeGroupMember(index)}}>Remove</button>}
                                    </div>
                                </div>
                                <GroupMemberForm />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    event:state.event.event,
    twitter: state.event.twitter,
    facebook: state.event.facebook,
    instagram: state.event.instagram,
    email: state.event.email
}
)

export default connect(mapStateToProps,)(MainDisplay)
