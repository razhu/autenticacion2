//dependencies
var restful = require('node-restful');
var pg = require('pg');

//schema
var productSchema = new pg.Schema({
  name: String,
  sku: String,
  price: Number
});

//return model
module.exports = restful.model('Products', productSchema);
