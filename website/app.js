/* Global Variables */


const urlBase = 'http:\\api.openweathermap.org/data/2.5/weather?zip='
const urlKey = '&appid=ccd63a65da20bd800e00f5f2d4579ff9'
const port = 3000 ; 
const myServerUrl = `http:\\localhost:${port}`;
let data = {};
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (+d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getFullYear();

//get route 
//const getData = (getFunc(url));

async function getFunc(url) {
    res = await fetch(url); //cross origin by default
    console.log(res);
    try {
        dataEntryFetched = await res.json();
        console.log('shorter assssssssssss');
        console.log(dataEntryFetched.main.temp);
        return dataEntryFetched.main.temp;
    }
    catch
    {
        console.log('error while get');
    }
}



//post route

//const postData =  (postFunc(url,data));

async function postFunc(url, data) {
    const res = await fetch(url ,
            {
                method: 'POST',
                credentials: 'same-origin',
                headers:
                {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }
        );

    try {
        //   const recData = await res.json();
        return res;
    } catch {
        console.log('post failed');
        // appropriately handle the error
    }

}

//generate ID

genElem = document.getElementById('generate');
console.log(genElem);
genElem.addEventListener("click", Weather);
//3ak
// const zipEntry = document.getElementById('zip');
// const feelEntry = document.getElementById('feelings');
// console.log (zipEntry);
// dataFetched = getFunc(urlBase+zipEntry+urlKey)
// newObj = {data:d , tempreture: zipEntry, userResponse:feelEntry};
// console.log(`the data we got is ${dataFetched}`);
//end 3ak
//call get route


//call post route

//post weather

/*take the entered data then call get then post func*/
async function Weather() {
    const zipEntry = document.getElementById('zip').value;
    const feelEntry = document.getElementById('feelings').value;
    console.log(zipEntry, feelEntry);
    console.log(urlBase + zipEntry + urlKey);
    dataFetched = await getFunc(urlBase + zipEntry + urlKey);
    newObj = { date: d, tempreture: dataFetched, userResponse: feelEntry };
    console.log('assssss');
    console.log(newObj);
    ali = await postFunc('http://localhost:3000/website',newObj);
    console.log(ali);

    updateUI(newObj);
}

function updateUI(newObj) {
    document.getElementById('date').innerHTML = newObj.date;
    document.getElementById('temp').innerHTML = newObj.tempreture;
    document.getElementById('content').innerHTML = newObj.userResponse;

}