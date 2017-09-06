var mongoose = require('mongoose'),
    config = require('./config'),
    Listing = require('./ListingSchema');

mongoose.connect(config.db.uri);
/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
	var item = Listing.find({ name: "Library West" },
	function(err, data) {
		if (err) throw err;
		console.log('Library West Found:\n' + data);
	});
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
	var item = Listing.findOneAndRemove({ code: "CABL" },
	function(err) {
		if (err) throw err;
		console.log('CABL removed');
	});
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
	var item = Listing.findOneAndUpdate({ name: "Phelps Memorial Hospital Center" },
	{ address: "701 N Broadway, Sleepy Hollow, NY 10591" },
	function(err, data) {
		if (err) throw err;
		console.log('Phelps Hospital Updated\n' + data);
	});
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
	var item = Listing.find({},
	function(err, data) {
		if (err) throw err;
		console.log('All Listings:\n' + data);
	});
};

//findLibraryWest();
//removeCable();
//updatePhelpsMemorial();
retrieveAllListings();
