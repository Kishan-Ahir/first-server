const http = require('http');

const server = http.createServer((req, res) => {
  console.log('My name is Kishan');
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`<h1>My name is Kishan.</h1>`);
  res.end();
});

server.listen(4000, () => {
  console.log('Server running on port 4000');
});

/*

Here's how the code works step by step:

We require the built-in http module in Node.js and use the createServer method to create an HTTP server. The createServer method takes a callback function that will be executed every time the server receives an HTTP request.

In the callback function, we log a message to the console containing your name using console.log.

We then set the response headers using res.writeHead to indicate that the response will contain HTML.

We use res.write to write an HTML <h1> element containing your name to the response body.

Finally, we call res.end to send the response to the client and end the request.

We start the server listening on port 4000 using the listen method and log a message to the console indicating that the server is running.

When you open a web browser and navigate to http://localhost:4000, the browser sends an HTTP request to the server, which responds with an HTML document containing an <h1> element with your name. The browser then renders this HTML document and displays your name in the browser window.

Overall, this code demonstrates how to create a simple HTTP server using Node.js and how to handle incoming HTTP requests to send back responses containing dynamic content.

*/