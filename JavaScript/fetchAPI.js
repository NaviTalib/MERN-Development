// The Fetch API is the modern, built-in way to make HTTP requests in JavaScript (replacing the old XMLHttpRequest).
// It's promise-based, works in browsers and Node.js (18+), 
// and is used to talk to servers/APIs — GET data, POST data, upload files, etc.

// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(response => response.json())
//     .then(data => console.log(data.name))
//     .catch(error => console.log("fetch failed:",error));


// Method	    Purpose
// GET	        Get data
// POST	    Create/send data
// PUT	        Replace/update data
// PATCH	    Partially update data
// DELETE	    Delete data

// GET request using async/await

async function getUser(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        if(!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
        }
        console.log(data);
        console.log(response.status);
    }
    catch(error){
        console.log(error);
    }
}

// getUser();

// 200 → OK
// 201 → Created
// 400 → Bad Request
// 401 → Unauthorized
// 403 → Forbidden
// 404 → Not Found
// 500 → Internal Server Error

// POST Request

async function createUser() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name:"RELOADx100",
                email:"reloadx@example.com"
            })
        });
        if(!response.ok){
            throw new Error("Failed to create user.")
        }

        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

// createUser();