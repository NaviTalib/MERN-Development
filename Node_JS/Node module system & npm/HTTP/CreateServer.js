import http from 'node:http';

const PORT = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set response headers
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;

  // Send body and end response
  res.end('Hello, World! Response from Node.js HTTP module.');
});

// Start listening on a port
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});