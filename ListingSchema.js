/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema,
    listings = require('./listings');

/* Create your schema */
var listingSchema = new Schema({
	code: String,
	name: String,
	coordinates: {
		latitude: Number,
		longitude: Number
	},
	address: String,
	created_at: Date,
	updated_at: Date
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre('save', function(next) {
	this.updated_at = new Date();
	this.code = listings.code;
	this.name = listings.name;
	this.coordinates.latitude = listings.coordinates.latitude;
	this.coordinates.longitude = listings.coordinates.longitude;
	this.address = listings.address;
	if (!this.created_at) this.created_at = currentDate; 
});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);


/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;