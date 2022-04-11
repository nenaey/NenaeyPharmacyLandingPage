// Express to run server & routes
const express = require('express');

// Start up an instance of app
const app = express();

// Dependencies
var bodyParser = require('body-parser');

/*Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('demo'));
const port = 8833;

//Spin up the server
const server = app.listen(port, listening);
// const server = app.listen(port,()=>{console.log(`running on localhost: ${port}`)})
// callback to debug
function listening(){
    console.log("server running");
    console.log(`running on localhost: ${port}`);
}

