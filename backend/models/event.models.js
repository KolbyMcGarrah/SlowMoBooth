const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventName: {type:String,required:true},
    contactList: {
        twitterAccounts:{type:Array,required:false},
        emailList:{type:Array,required:false},
        facebookAccounts:{type:Array,required:false},
        instagramAccounts:{type:Array,requird:false}
    },
    venue:{type:String,required:false},
    active:{type:Boolean,default:false}},
    {timestamps:true}
    )
const Event = mongoose.model("Event",eventSchema)

module.exports = Event