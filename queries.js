var mongoose = require('mongoose'),
    config = require('./config'),
    Listing = require('./ListingSchema');

mongoose.connect(config.db.uri);
/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
	var item = Listing.find({ name: "Library West" },
	function(err, data) {
		if (err) throw err;
		console.log('Library West Found:\n' + data);
	});
};
var removeCable = function() {
	var item = Listing.findOneAndRemove({ code: "CABL" },
	function(err) {
		if (err) throw err;
		console.log('CABL removed');
	});
};
var updatePhelpsMemorial = function() {
	var item = Listing.findOneAndUpdate({ name: "Phelps Laboratory" },
	{ address: "Phelps Lab, Gainesville, FL 32603" },
	function(err, data) {
		if (err) throw err;
		console.log('Phelps Laboratory Updated\n' + data);
	});
};
var retrieveAllListings = function() {
	var item = Listing.find({},
	function(err, data) {
		if (err) throw err;
		console.log('All Listings:\n' + data);
		mongoose.disconnect();
	});
};


findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();

