"use strict";

        //store url in a variable. 
    let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json";
    let request = new XMLHttpRequest();//new request instance created.
    request.open("GET", requestURL); //new request made using keyword "open"
    request.responseType = "json"; //responsetype set
    request.send(); //request sent. 
    request.onload = function(){      
        let requestData = request.response; 
        let myH1 = document.createElement("superSquad"); 
        let myH2 = document.createElement("h2"); 

        myH1.textContent = requestData["Super hero squad"]; 
        myH2.textContent = requestData["squadName"]; //Text content set to equal squadName and appended to header. 
        document.getElementById("name").appendChild(myH2); 
        document.getElementById("name").appendChild(myH2);
        document.getElementById("name").appendChild(myH2);

    }

function getHeroes(_heroData){
    //Arrays created for the different headings

let heroes = _heroData["members"]; 
document.getElementById("squadName").innerHTML =_heroData["squadName"];
document.getElementById("homeTown").innerHTML =_heroData["homeTown"];
document.getElementById("secretBase").innerHTML =_heroData["secretBase"];
document.getElementById("active").innerHTML =_heroData["active"];
document.getElementById("secretIdentity").innerHTML =_heroData["secretIdentity"];
document.getElementById("powers").innerHTML =_heroData["powers"];

}
//console.table(_heroData); 