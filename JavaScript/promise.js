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

console.log("start");
setTimeout(() => {
    console.log("data received");
}, 2000);
console.log("end");


