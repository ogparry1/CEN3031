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
    listings = require('./listings'),
    listData, listItem;

/* Connect to your database */
mongoose.connect(config.db.uri);

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
for (var item in listData) {
	//listItem = new Listing(item);
	//listItem.save(function(err, item) {
	//	if (err) throw err;
	//	console.log('Status: item saved');
	console.log('Status: Creating Entries in DB');
	//});
}

fs.readFile('listings.json', 'utf8', function(err, data) {
	if (err) throw err;
	else listData = JSON.parse(data);	
});

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */
