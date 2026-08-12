//Destructuring allows you to extract values from arrays or properties from objects 
// and store them directly into variables.

// Destructuring in Objects

const person = {
    name:"Talib",
    age:28,
    city:"noida",
    
}

// const {name,age,city} = person;

// console.log(name);
// console.log(age);
// console.log(city);

// Destructuring With Different Variable Names

const {name: Username} = person;

// console.log(Username);

// Default Values
const { name, experence = "fresher"} = person;
// console.log(experence)

//Destructuring in Arrays

const numbers = [55,45,98];

const [a,b,c] = numbers;

// console.log(a);
// console.log(b);
// console.log(c);

//Skipping Array Values

// const [a,,c] = numbers;
// console.log(a,c);


//Destructuring Function Parameters

function displayUser(user){
    console.log(user.name);
    console.log(user.age);
}

// displayUser(person);

function displayUser2({name,age}){
    console.log(name);
    console.log(age);
}

// displayUser2(person);

// Array Destructuring in Function Parameters

function sum([a,b]){
    return a+b;
}

// console.log(sum([8,9]));


// Destructuring Function Return Values
function getUser(){
    return ["navi",28];
}

const [uname,uage] = getUser();
// console.log(uname);
// console.log(uage);