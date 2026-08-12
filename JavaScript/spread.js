// Spread Operator (...)

// The spread operator is used to expand/unpack elements 
// of an iterable (like an array or string) or properties of an object.

// Think:
// Spread = take things OUT

const numbers = [10,29,49];

// console.log(...numbers);
// console.log(numbers);

// copy array 

const copy = [...numbers];
// console.log(copy);

// combine arrays

const combined = [...numbers,...copy];
// console.log(combined);

// spread with function

function add(a,b,c){
    return a+b+c;
}

// console.log(add(...numbers));

// find max
// console.log(Math.max(...numbers));

// Spread with Strings
const name = "Navi"

// console.log([...name]);
// console.log(...name);

// Spread with Objects

const user = {
    name:"Navi T",
    profile:"Full Stack Developer"
}
const UserCopy = {
    ...user
}

// console.log(UserCopy);

// combining objects 

const userPersonal = {
    age:28,
    city: "Noida"
}

const UpdatedUser = {
    ...user,
    ...userPersonal
}

// console.log(UpdatedUser);



