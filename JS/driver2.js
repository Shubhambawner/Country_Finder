// parameters to be passed to the map: https://developers.google.com/maps/documentation/embed/embedding-map

let googleAPI = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBIrubbc15yK802OgEQ0OlwV71LrmYovDE&q=`

let Iframe = document.querySelector("iframe")
let input = document.querySelector(".input")
let output = document.querySelector(".output")
let dcList = document.querySelector(".dcList")
let searchBtn = document.querySelector(".search")
let flag = document.querySelector(".flag")

//this variable is string, name of country being visited
let inputvalue = localStorage.getItem("country") //we stored the country to be searched on localstorage, on the earlier page, so that we can fetch it Norway 
if(!inputvalue){
    inputvalue = "India"//if localStorage gets some error
}


//update google maps
Iframe.src =googleAPI + inputvalue;


//update the information card
fetch("https://restcountries.com/v3.1/name/" + inputvalue.toLowerCase() + "?fullText=true")
    .then(response => response.json())
    .then(response => {
        document.querySelector(".flag").src = response[0]["flags"]["svg"]
        let cp = response[0]["capital"][0]
        let reg = response[0]["continents"][0]
        let lg = JSON.stringify(response[0]["languages"]);
        lg = lg.split(`"`);
        let lang = lg[3];
        console.log(lg)
        document.querySelector(".card-text").innerHTML = inputvalue + " is the country from " + reg + ". The capital city of " + inputvalue + " is " + cp + ", with main language being " + lang
        output.innerHTML = inputvalue;

    })

//attach hyperlink to wiki search button
let h = document.querySelector("a.btn.btn-primary")
h.href = "https://en.wikipedia.org/wiki/" + inputvalue




//////////////////////////////////////////////////////////////////////////

// Make the DIV element draggable:
