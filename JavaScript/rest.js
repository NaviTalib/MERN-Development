// Rest : Collect values, it is commonly used in functions

function add(...numbers){
    return numbers;
}

console.log(add(5,5,8,8,2));

// Normal Parameters + Rest
function introduce(name,age,...skills){
    console.log(name);
    console.log(age);
    console.log(skills);
}

// introduce("navi",28,"HTML","CSS","JS","JAVA");

// Rest in Array Destructuring

const numbers = [10,20,30,40,50];

const[first,...rest] = numbers;

// console.log(first);
// console.log(rest);

// rest in objects

const user = {
    name: "navi",
    age:28,
    city:"noida",
    role:"developer"
}

const {name,...otherDetails} = user;

// console.log(name);
// console.log(otherDetails);