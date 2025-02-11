// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080




// Add an HTTP Header
// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello World!');
//   res.end();
// }).listen(8080);




// Read the Query String
// "url" which holds the part of the url that comes after the domain name
// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(req.url);
//   res.end();
// }).listen(8080);



// Split the Query String
var http = require('http');
var url = require('url');
const port = 8080;
const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;  //http://localhost:8080/?year=2024&month=March
  var txt = q.year + " " + q.month; //OUTPUT:   2024 March
  res.end(txt);
});
server.listen(port, () => {
    console.log(`server is running: ${port}`);
});



