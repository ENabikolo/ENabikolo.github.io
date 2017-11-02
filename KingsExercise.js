"use strict"; 
function kings() {
    let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json"; 
    let request = new XMLHttpRequest(); 
    request.open("GET", requestURL);
    request.responseType = "json"
    request.send();
    request.onload = function () {
        let kings = request.response;
    console.log(kings);
        //let myH1 = document.createElement("h1"); 
     
    }
}
//for 
function getkings(_kingsData) {
    let nm = [];
    let cty = [];
    let hse = [];
    let yrs = [];

for (let key in _kingsData) {
        // store kings information
        let kings = _kingsData[i]; //index point
    
    for(let i = 0; i<_kingsData.length; i++){
        if(_kingsData.length.includes[i]=="output"){
            console.log(true); 
        }
    }

    }
}
