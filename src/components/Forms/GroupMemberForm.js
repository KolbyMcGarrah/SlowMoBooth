import React, { Component } from 'react'
import EmailForm from "./EmailForm"
import ContactButtons from "../Displays/ContactButtons";
import FormController from "./FormController"

export class GroupMemberForm extends Component {

    state = {
        instagramDisplay:false,
        facebookDisplay:false,
        twitterDisplay:false
    }

    displayForm = formType => {
        switch(formType){
            case "facebook":
                this.setState({facebookDisplay:true})
                break
            case "instagram":
                this.setState({instagramDisplay:true})
                break
            case "twitter":
                this.setState({twitterDisplay:true})
                break
            case "rmFacebook":
                this.setState({facebookDisplay:false})
                break
            case "rmTwitter":
                this.setState({twitterDisplay:false})
                break
            case "rmInstagram":
                this.setState({instagramDisplay:false})
                break
            default: 
                break
        }
        this.setState({formDisplay:formType})
    } 

    render() {
        const {instagramDisplay, facebookDisplay, twitterDisplay} = this.state
        return (
                <div className="card-body">
                    <div className='container'>
                        <EmailForm displayForm={this.displayForm}/>
                        <FormController  
                            displayForm={this.displayForm}
                            instagramDisplay={instagramDisplay}
                            facebookDisplay={facebookDisplay}
                            twitterDisplay={twitterDisplay}
                        />
                        <ContactButtons displayForm={this.displayForm}/>
                    </div>
                </div>
        )
    }
}

export default GroupMemberForm
