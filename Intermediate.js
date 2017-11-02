"use strict"; 
//Iteration 3
function myBeez(i){
for(i = 0; i < 100; i++){
    if((i%3) === 0){
        console.log("Fizz"); 
    }else if((i%5) === 0){
        console.log("Buzz"); 
    } else {
        (((i%3) === 0) && (((i%5) === 0)));
        console.log("Fizz Buzz"); 
    }
   //push the other values????/ 
    }
}
 myBeez(25);   
       
//Iteration 4: while loop as I dont know the number of iterations its going to take. 
function myNumber(numy){ 
while (numy != 1){
    if(numy%3 === 0){
       numy = numy/3; //assign so it doesnt return anything.
        console.log("Divides by 3.");
    }else if((numy +1)%3 === 0){
        numy++;
        numy = numy/3;
        console.log("Increment divides by 3")
    }else if((numy -1)%3 === 0){
        numy --;
        numy = numy/3;
         console.log("Decrement divides by 3")
    }
}
}
myNumber(17); 
   
//*HEEEEEEEELLLLLLLLLLLLLLPPPPPPPPPPP!!!!!!!!!!!!**
//Strings 4 (do while loop????). Function that counts the occurences of a substring in a string. 
    function myTriple(string, subString, allowOverlapping){
    
        //Cater to situations where the loop might have empty spaces. 
        string += ""; 
        subString +=""; 
        if(subString.length <= 0){
            return (subString.length +1); //deals with empty strings
        }
        let n = 0, pos = 0, step = allowOverlapping ? 1 :subString.length; 

    while(true){
        pos = string.indexOf(subString, pos); 
        if(pos >= 0){
            ++n;
            pos += step; 
        } else break; 
    }
    return n; 
}
//myTriple("abcXXXabc"); 
myTriple("kkkyykkkyykkk", "kkk"); 
    /*     
//DOM
function addPtag(){
    let p1 = document.createElement("Abeeno"); 
    p1.innerHTML = "paragraph 1"; 
    p.appendChild(p1); 

    //add the newly created element and its content into the DOM
       let element = document.getElementById("Abeeno").innerHTML; 
        
   //document.getElementById("p1").onclick = addPtag(); 

//appendChild: adds a HTML element
//}
    //let myElement = document.getElementById("Abeeno"); 
//let myElement = document.getElementById("myElement");

//document.addEventListener("click", function(){

// //displays the paragraph change on click. 

//});

//document.removeElementById("demo".innerHTML = "Abeeno"); 
*/