//set up the app
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//dotenv lets me grab variables from an external env file
require('dotenv').config();

//setup the app
const app = express();
//port to be set by the environmental variables with a default of 5000
const port = process.env.PORT || 5000;

//apply middleware
app.use(cors())
app.use(express.json());

//set up database
//get the endpoint for the atlas cluster
const uri = process.env.ATLAS_URI
//set up connection through mongoose
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true});
//connect
const connection = mongoose.connection;
connection.once('open',() => {
    console.log("MongoDB connection established successfully...")
})

const eventRouter = require("./routes/event");
const userRouter = require("./routes/user");

app.use('/events',eventRouter);
app.use('/users',userRouter);

//set up the server to run and listen on specified port.
app.listen(port, () => {
    console.log(`Server listening on port:${port}...`);
}) 