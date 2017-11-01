//1.Given a string, return a string where for every char in the original, there are two chars.

function doubleChar(str){
    //your code here
    let Arr =[]; 
for(let i=0; i<=str.length-1; i++){
    Arr.push(str[i]); 
    Arr.push(str[i]); 
}
return Arr.join(""); 
}
console.log(Arr("The")); 

//2.Sandwich task
//let Sandwich1 = "breadjambread"; //find the length and then use that to split the word into 3 words. Then slice and return the last word.  

/*
//3. Integers a,b,c
function myInt (x, y, z){
    if((y-x)==(z-y) ||(x-z)==(y-x)){
        return true;
    }else{
        return false;
    }

}
console.log(myInt(2,4,6));
console.log(myInt(3,4,7));
console.log(myInt(2,7,9));


//4.Given a string and an int n, return a string made of the first and last n chars from the string. 

//5.Given a string, return true if it ends in "ly".


*/