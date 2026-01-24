
import {temples} from "../data/temples.js";
//console.log(temples)

import {url} from "../data/temples.js";
//console.log(url)

//Grab a reference to the division where we display the items

const showHere = document.querySelector("#showHere")
const mydialog = document.querySelector("#mydialog")
const mytitle = document.querySelector("#mydialog h2")
const myclose = document.querySelector("#mydialog button")
const myinfo = document.querySelector("mydialog p")
myclose.addEventListener('click', () => mydialog.close())
//Get reference to HTML dialog


// Loop through the array of JSON items
function displayItems(data) {
    console.log(data)
    data.forEach(x => {
        console.log(x)
        const photo = document.createElement("img")
        photo.src = `${url}${x.path}`
        photo.alt = x.name
        
        // add event Listener to each division on the page
        photo.addEventListener('click',() => showStuff(x));
        showHere.appendChild(photo)
    });
}  // end of loop
    
// End function

//start displaying all items in JSON file
displayItems(temples)

// Populate the dialog with information when image is clicked
function showStuff(x) {
    mytitle.innerHTML = x.name
    mydialog.showModal()
}