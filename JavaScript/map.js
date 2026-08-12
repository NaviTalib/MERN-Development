// map() is used when you want to transform every element of an array and create a new array.

const numbers = [1,2,3,4,5];
const double = numbers.map((num)=>{ return num*2;});

// console.log(double);

// with string

const names = ["aman","deepak","uzair"];

const upperNames = names.map((name)=>{
    return name.toUpperCase();
});

// console.log(upperNames)

// with index

const fruits = ["apple","banana","mango"];

const result = fruits.map((fruit,index)=>{
    return `${index}:${fruit}`;
});

// console.log(result);


// with objects
const users = [
    {name:"aman",age:25},
    {name:"deepak",age:27},
    {name:"uzair",age:28},
];

const names1 = users.map((users) => {
    return users.name;
});

// console.log(names1);

// transform object using map

const updatedUser = users.map((users)=>{
    return {
        name:users.name,
        age:users.age+1
    }
});

// console.log(updatedUser);