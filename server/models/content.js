var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Content = new Schema({
	title: String,
  address: String,
  complex: String,
  landlord: String,
  bedrooms: String,
  rent: String,  
  size: String,
  neighborhood: String,
  amenities: String,  
	description: String,
  tenure: String,
	lat: String,
	lng: String,
	name: String,
	email: String
}, {collection: 'slcrt'});

module.exports = mongoose.model('Content', Content);