// getting the references here
const resDiv = document.querySelector('#output');
const inputText = document.querySelector('#locationSearch');



// adding event listener here
inputText.addEventListener('input', () => findLocation(inputText.value));

// defining the async function here to fetch the data
// using the async here
let findLocation = async (value) => {

    // fetching the json data here
    let jsonData = await fetch('JSON Data/location.js');

    // data here
    let data = await jsonData.json();

    // getting the required data
    let matchData = data.filter((item) => {

        // using regx here to validate the search

        // ^ used to when search item it search for the first letter, g for globally and i for case insensitive
        let regx = new RegExp(`^${value}`, `gi`);

        return item.name.match(regx);
    });

    // validation here
    if (value.length === 0) {
        matchData = [];
        resDiv.innerHTML = ''

    }

    printHTML(matchData);

};

// defining the function to print the data in the HTML
let printHTML = (data) => {


    if (data.length > 0) {

        // map to the array of data found
        let html = data.map(item =>
            `<div class = "card m-2 bg-dark">
            <img src="${item.flag}" class="card-img-top" alt="...">
            <div class="text-white card-body">
            <h4>${item.name} (${item.alpha2Code})</h4>
            <p>Calling Code: ${item.callingCodes}</p>
            <p>Capital: ${item.capital}</p>
            <p>Region : ${item.region}</p>
            <p>SubRegion : ${item.subregion}</p>
            <p>Population : ${item.population}</p>
            <p>Area : ${item.area}</p>
            <p>TimeZone = ${item.timezones}</p>
            <p>Borders: ${item.borders}</p>
            <p>Native Name : ${item.nativeName}</p>
            <p>Numeric Code : ${item.numericCode}</p>
            <p>Currencies Code : ${item.currencies[0].code}</p>
            <p>Currencies Name : ${item.currencies[0].name}</p>
            <p>Currencies Symbol : ${item.currencies[0].symbol}</p>
            <p>Language : ${item.languages[0].name}</p>
            <small>Latitude : ${item.latlng[0]}</small>
            <small>Longitude : ${item.latlng[1]}</small>
            </div>
            </div>`)
            .join('');
        resDiv.innerHTML = html;
    }
    else{
        
        resDiv.innerHTML = `
        <div class = "card bg-dark">
        <div class = "card-body text-white">
        <h3 class = 'text-center'>
        NO DATA FOUND</h3>
        
        </div></div>
        `
    }
}