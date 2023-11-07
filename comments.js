// Create web server
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body as "Hello, World!"
  res.end('Hello, World!\n');
});

// Define the port for the server to listen on
const port = 3000;

// Start the server and have it listen on the defined port
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});