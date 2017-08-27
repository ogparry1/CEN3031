var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
	var parsedUrl = url.parse(request.url);

  // if GET request from /listings then respond with listingData
  // else if GET request from /(other) then respond error 404
  if (parsedUrl.path === '/listings' ) response.write(JSON.stringify(listingData));
  else {
    response.statusCode = 404;
    response.end('Bad gateway error');
  }
  response.end();

};

fs.readFile('listings.json', 'utf8', function(err, data) {
  if (err) throw err; // if there's an error, throw an error
  else {
    // else parse JSON to listingData and start the server
    listingData = JSON.parse(data);
    server = http.createServer(requestHandler).listen(port);

    // confirm port listening
    console.log("Server listening.");
	}
});
