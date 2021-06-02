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
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
const port = 3001 ; 
const myServer = app.listen(port , serverCbk) ; 
function serverCbk ()
{
    console.log(`we are running on port ${port}`);
}

//setting get route
//The url is `http://localhost:${port}`;
app.get('/website'/*url*/  , clientGetData) ; 
function clientGetData (req,res)
{

    //res.send('Hello world');
    console.log ('we reached get');
    console.log (projectData);
    res.send(projectData);
}

//setting post route
app.post('/website'  , clientPostData) ; 

function clientPostData (req,res)
{
    //console.log ('we reached post');
    //res.send('done really');

    console.log('we reached here 1');
    try
    {//console.log('we reached here 2');
newEntry=
    {
        date: req.body.date,
        temperature: req.body.temperature,
        userResponse: req.body.userResponse
    }
//    console.log('we reached here 3');
projectData=(newEntry);
projectDataArr.push = projectData ;
console.log (projectData) ;
res.status (231);
console.log ('server response:');
console.log(res.statusCode);
res.end();

    }
    catch 
    {  // console.log('we reached here 4');
        console.log('error sever');
    }
   // console.log('we reached here 5');
    
}
