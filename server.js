// Setup empty JS object to act as endpoint for all routes
projectData = {};
projectDataArr= [] ;
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
const port = 3000 ; 
const myServer = app.listen(port , serverCbk) ; 
function serverCbk ()
{
    console.log(`we are running on port ${port}`);
}

//setting get route
//const url = `http://localhost:${port}`;
app.get('/website'/*url*/  , clientGetData) ; 
function clientGetData (req,res)
{
    res.send('Hello world');
    res.send(projectData);
}

//setting post route
app.post('/website'  , clientPostData) ; 

function clientPostData (req,res)
{console.log('we entered1');
    try
    {console.log('we entered2');
newEntry=
    {
        temperature: req.body.temperature,
        date: req.body.date,
        userResponse: req.body.userResponse
    }
    console.log('we entered3');
projectData=(newEntry);
projectDataArr.push = projectData ;
console.log (projectData) ;
res.send('done');
    }
    catch 
    {console.log('we entered4');
        console.log('error sever');
    }
    console.log('we entered5');
}
