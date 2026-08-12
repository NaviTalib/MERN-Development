// filter() is used when you want to select certain elements from an array based on a condition.

// It creates a new array containing only the elements for which the callback returns true

const numbers = [1,2,3,4,5,6,7,8];
const even = numbers.filter((num)=>{
    return num%2===0;
});


//Filter strings

const names = ["aman","deepak","uzair"];
const result = names.filter((name)=> name.length>4);

// filter objects

const users = [
    {name:"taufiq",age:20},
    {name:"aman",age:25},
    {name:"uzair",age:27},
    {name:"deepak",age:28},
    {name:"akash",age:29}
];

const result1 = users.filter((user)=> user.age>20);




console.log(result1);