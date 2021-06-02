/* Global Variables */


const urlBase = 'https://api.openweathermap.org/data/2.5/weather?zip='
const urlKey = '&appid=ccd63a65da20bd800e00f5f2d4579ff9'
const port = 3001 ; 
const myServerUrl = `http:\\localhost:${port}`;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (+d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getFullYear();


//get route from remote server
async function getFunc(url) {
    res = await fetch( url);//,{mode:'no-cors'}); //cross origin by default
    console.log(res);
    try {
        dataEntryFetched = await res.json();
        console.log(dataEntryFetched.main.temp);
        return dataEntryFetched.main.temp;
    }
    catch
    {
        console.log('error while get');
    }
}


//generate ID
genElem = document.getElementById('generate');
console.log(genElem);
genElem.addEventListener("click", Weather);

//post weather
/*take the entered data then call get then post func*/
async function Weather() {
    const zipEntry = document.getElementById('zip').value;
    const feelEntry = document.getElementById('feelings').value;
    console.log(zipEntry, feelEntry);
    console.log(urlBase + zipEntry + urlKey);
    dataFetched = await getFunc(urlBase + zipEntry + urlKey)
    
    /*Posting to local server*/ 
    .then(async(dataFetched)=>{
        newObj = { date: d, temperature: dataFetched, userResponse: feelEntry };
        const res = await fetch('http://localhost:3001/website' ,
                {
                    method: 'POST',
                    credentials: 'same-origin',
                    headers:
                    {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newObj),
                }
            );
    
        try {
            return res;
        } catch {
            console.log('post failed');
            // appropriately handle the error
        }
    
    })

    /*Getting from local server*/ 
    .then(async()=>{
        res = await fetch('http://localhost:3001/website'); //cross origin by default
        console.log(res);
        try {
            dataEntryFetched = await res.json();
            console.log(dataEntryFetched);
            return dataEntryFetched;
        }
        catch
        {
            console.log('error while get');
        }
    })


    /*Updating UI based on the success of previous promises*/ 
    .then(() => 
 {
    document.getElementById('date').innerHTML = newObj.date;
    document.getElementById('temp').innerHTML = newObj.temperature;
    document.getElementById('content').innerHTML = newObj.userResponse;

});
}