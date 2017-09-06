'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema'), 
    config = require('./config'),
    listings = require('./listings');

/* Connect to your database */
before(function(done) {
	mongoose.connect(config.db.uri);
	done();
});
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */

var listItem = JSON.stringify(listing;

for each (var item in listings.entries) {
	listItem = new Listing(item);
	listItem.save(function(err, item) {
		if (err) throw err;
		console.log('Status: item saved');
	});
}

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */
