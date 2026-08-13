// What is a Closure?

// A closure happens when an inner function remembers and can access variables from its outer function even after the outer function has finished executing.

// The easiest way to remember it:

// Closure = Function + its remembered surrounding environment

// function outer(){
//     let message = "hello";

//     function inner(){
//         console.log(message);
//     }
//     return inner;

// }

// const fn = outer();
// fn();

// function outer(){
//     let x = 10;

//     function inner(){
//         console.log(x);
//     }
//     return inner;
// }

// const fn = outer();

// fn();



// Lexical Scope

// Closures depend heavily on lexical scope.

// Lexical scope means:

// A function can access variables based on where the function was written, not where it is called.

// let name = "navi";

// function outer(){
//     let age = 28;

//     function inner(){
//         console.log(name);
//         console.log(age);
//     }
//     inner();
// }

// outer();

// Closure Example with Counter

// function createCounter(){
//     let count = 0;

//     return function(){
//         count++;
//         console.log(count);
//     };
// }

// const counter = createCounter();

// counter();
// counter();
// counter();

// Private Varibales Using Closures

// JavaScript doesn't traditionally have private variables using normal variables.
// Closures can provide similar behavior.

// function bankAccount(initialBalacne){
//     let balance = initialBalacne;

//     return{
//         deposit(amount){
//             balance+=amount;
//         },
//         withdraw(amount){
//             balance-=amount;
//         },
//         getBalance(){
//             return balance;
//         }
//     };
// }

// const account = bankAccount(5000);
// account.deposit(500);

// console.log(account.getBalance());
// console.log(account.balance);