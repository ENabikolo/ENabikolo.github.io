
//Iteration 3
for(i = 0; i < 100; i++){
    if(i%3){
        console.log("Fizz"); 
    }else if(i%5){
        console.log("Buzz"); 
    } else {
        (i%3 && i%5);
        console.log("Fizz Buzz"); 
    }
   //push the other values????/ 
    }
   
       
    //Iteration 4
    /*for(i=0; i<25; i++){
        Console.log(i)
    }*/
 


    //Strings 4 (do while loop????)
    let j;
    for (let j = 0; j < 25; j++){
        console.log(j)
    } 


    //DOM
    //let myElement = document.getElementById("Abeeno"); 
let myElement = document.getElementById("myElement");

document.addEventListener("click", function(){

document.getElementById("demo").innerHTML = "Abeeno"; //displays the paragraph change on click. 

});

//document.removeElementById("demo".innerHTML = "Abeeno"); 

    //JSON
let getJSON = function(url, )

    let request = new XMLHttpRequest(); 
    request.open("GET", url, true); 
    request.responseType = "json"; 
//request.send(); 
    request.onload = function(){
    let requestData = request.response; 
    let myH1 = document.createElement("h1"); 
    myH1.textContent = requestData["Super hero squad"]; 
    document.getElementsByTagName("head")[0].appendChild(myH1);
}

const url = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json";