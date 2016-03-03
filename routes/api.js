//dependencies
var express = require('express');
var router = express.Router();
//end dependencies

//model
var Product = require('../models/product');

//routes
// router.get('products', function(req, res){
//     res.send('API is working');
// });

Product.methods(['get', 'post', 'put', 'delete']);
Product.register(router, '/products');
//end routes


//return router as a module
module.exports = router;
