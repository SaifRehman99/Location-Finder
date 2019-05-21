// getting the references here
const resDiv = document.querySelector('#output');
const inputText = document.querySelector('#locationSearch');


// adding event listener here
inputText.addEventListener('input',()=> findLocation(inputText.value));

// defining the async function here to fetch the data
let findLocation = async (value)=>{

    // fetching the json data here
    let jsonData = await fetch('JSON Data/location.js');

    // data here
    let data = await jsonData.json();

    // getting the required data
    let matchData = data.filter((item)=>{
        
        // using regx here to validate the search

        // ^ used to when search item it search for the first letter, g for globally and i for case insensitive
        let regx = new RegExp(`^${value}`, `gi`);
        
        return item.name.match(regx);
    });

    // validation here
    if(value.length === 0){
         matchData = [];
    }

    console.log(matchData)
};