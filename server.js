// Setup empty JS object to act as endpoint for all routes
projectData = {};
projectDataArr= [] ;
/**/ 
jsdom = require("jsdom")
browser = require('browserify'); 
const { JSDOM } = jsdom;
global.document = new JSDOM('website/index.html').window.document;
console.log (document);
/**/ 
// Require Express to run server and routes
const express = require('express'); 
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors'); 
app.use(cors);
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

const port = 8000 ; 
const myServer = app.listen(port , serverCbk) ; 

function serverCbk ()
{
    console.log(`we are running on port ${port}`);
}

//setting get route
let url = '/website';

app.get (url  , clientGetData) ; 

function clientGetData (req,res)
{
    res.send(projectData);
}



//setting post route
app.post (url  , clientPostData) ; 

function clientPostData (req,res)
{

newEntry=
    {
        temperature: req.body.temperature,
        date: req.body.date,
        userResponse: req.body.userResponse
    }

projectData=(newEntry);
projectDataArr.push = projectData ;
console.log (projectData) ;
}
