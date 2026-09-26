import http from 'node:http';

const server = http.createServer((req, res) => {
  const { method, url } = req;

  // Set default header to JSON
  res.setHeader('Content-Type', 'application/json');

  if (url === '/api/users' && method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify([{ id: 1, name: 'Navi' }, { id: 2, name: 'Talib' }]));
  } 
  else if (url === '/api/status' && method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({ status: 'ok', uptime: process.uptime() }));
  } 
  else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Route not found' }));
  }
});

server.listen(3000);