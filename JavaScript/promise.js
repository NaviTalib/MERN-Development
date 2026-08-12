// Why do we need Promises?
// JavaScript is generally synchronous, meaning code executes one statement after another.

// console.log("start");
// console.log("hello");
// console.log("end");

// But many operations take time:

// Fetching data from an API
// Reading a file
// Querying a database
// Sending a request to a server
// Waiting for a timer
// Uploading a file

// console.log("start");
// setTimeout(() => {
//     console.log("data received");
// }, 2000);
// console.log("end");

// JavaScript doesn't stop and wait for the 2 seconds. The operation happens asynchronously.

// Promises provide a clean way to handle these asynchronous operations.


// What is a Promise?

// A Promise is an object that represents the eventual result of an asynchronous operation.

// In simple words:

// A Promise says: "I don't have the result right now, but I will give you the result later."

// A Promise has three states:
//           Promise
//              |
//        ┌─────┴─────┐
//        ↓           ↓
//    Pending      Settled
//                 /     \
//                ↓       ↓
//           Fulfilled   Rejected

// 1. Pending

// Operation is still running.

// 2. Fulfilled

// Operation completed successfully.

// 3. Rejected

// Operation failed.

// creating a promise

// const promise = new Promise((resolve,reject)=>{
//     let success = false;
//     if(success){
//         resolve("operation successful");
//     }
//     else{
//         reject("operation failed");
//     }
// });

// console.log(promise);

// Consuming a Promise with .then()

// We use .then() to handle a successful Promise.

// promise.then((result)=>{
//     console.log(result);
// })

// Handling errors with .catch()

// For rejected Promises, we use .catch().

// promise
//     .then((result)=>{
//     console.log(result)
//     })
//     .catch((error)=>{
//         console.log(error);
//     });


// .finally()

// .finally() executes regardless of whether the Promise succeeds or fails.    

// promise.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("operation completed");
// });

// Promise with setTimeout

// Let's create a realistic example.

// function getData(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("Data received from server");
//         },2000);
//     });
// }

// getData().then( data => {console.log(data);})
//         .catch(error => {console.log(error);});


// promsie chaining
Promise.resolve(10)
  .then(value => value * 2) // 100
  .then(value => value + 5)  // 105
  .then(value => console.log(value)); // Logs: 105
