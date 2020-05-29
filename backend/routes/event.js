const express = require('express');
const router = express.Router();
let Event = require('../models/event.models');

router.get('/',(req,res) => {
    Event.find()
    .then(events => res.json(events))
    .catch(err => res.status(400).json("Error" + err));
});

router.get('/active',(req,res) => {
    Event.find({active:true})
    .then(events => res.json(events[0]))
    .catch(err => res.status(400).json("Error" + err));
});

router.post('/add',(req,res) => {
    const eventName = req.body.eventName;
    const venue = req.body.venue;
    const active = true;
    const newEvent = new Event({
        eventName,
        venue,
        active
    });
    console.log(newEvent)
    newEvent.save()
    .then(() => res.json("Event Added!"))
    .catch(err => res.status(400).json("Error" + err));
})

router.put('/update',(req,res) => {
    body = req.body
    console.log(body)
    const facebook = body.facebook
    const twitter = body.twitter
    const instagram = body.instagram
    const email = body.email
    const contactList = {
        facebookAccounts:facebook,
        instagramAccounts:instagram,
        twitterAccounts:twitter,
        emailList:email
    }
    Event.findByIdAndUpdate(body.id,{contactList:contactList},function(err, response){
        if (err){
            console.log(err)
        }
        else{
            console.log(response)
        }
    })
})

router.put('/change',(req,res) => {
    body = req.body
    console.log(body)
    const eventName = req.body.eventName;
    const venue = req.body.venue;
    const active = req.body.active
    Event.findByIdAndUpdate(body.id,{eventName:eventName, venue:venue, active:active},function(err, response){
        if (err){
            console.log(err)
        }
        else{
            res.json("Event Updated")
        }
    })
})

router.delete(`/delete`,(req,res) => {
    console.log(req.query.id)
    Event.findByIdAndRemove(req.query.id)
    .then(() => {
        res.json("Event Deleted")
    })
})
 
module.exports = router