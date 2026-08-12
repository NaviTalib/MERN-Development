var x = 4; // function scolped,can be redeclared, hoisted with undefined
var x = 44;

console.log(x);

let y = 5; // blocked scope, cannot be redeclared in same scope
y = 7;
console.log(y);

// let y = 45;
// console.log(y);

const z = 33; // blocked scope, cannot be reassigned

// block scope example
if(true){
    let a = 55;
    let b = 30;

}

// console.log(b);

const arr = [2,3,4]; 
arr.push(5); //fine - mutating the array
console.log(arr);
// arr = [5,6] error - reassinging the variable
