// Redo using object keyword. 
//button created for Events 1 does not increase the age of your object person. 

//variables 2
let person = {
        name: "Chez",
        age: 35,
        occupation: "lecturer", 

whoDat:function(){
    console.log("My name is " + this.name); 
    console.log("And my age is " + this.age);
    console.log("I work as a " + this.occupation); 
    }
}
person.whoDat(); 
console.log("Name of object person is " + person.name); 

//HAVE A LOOK AT THIS!!!!!!!!!!!!!!!!!!
/*var person = { name: "Jennifer", age:25, occupation: "jazz musician"}
console.log("My name is " + this.name, + "and my age is "+ this.age + "." 
+ "I work as a " + this.occupation + "."); */


//Strings 1
let hisName = "Elliott"; 
console.log("He said "+ "My name is " + hisName); 
console.log("He said My name is Elliott".toUpperCase()); 

//Strings 2
let m = "Jaaja" + 70; 
alert(m.concat()); 

//Arrays 1/Strings 3
let myBreakfast = [`Oats`,`Cereal`, `Smoothie`]; 
console.log(myBreakfast);
myBreakfast.push(`Full English`); 
//myBreakfast[myBreakfast.length] = `Full English`; 
console.log(myBreakfast);
myBreakfast = [`Oats`, `Cereal`, `Smoothie`, `Full English`]; 
myBreakfast.pop() // remove the last element of an array.
console.log(myBreakfast);

//Conditionals 1
    if(person.age >20 && person.age <40 ){
        console.log(true); 
    } else{
        console.log(false); 

    }

//Iteration 1
for(i = 0; i<10; i++){
        console.log(i);  
    }

//Iteration 2
for(i = 0; i<10; i++){
    if(i%2){
        console.log(i);  
    }
}



