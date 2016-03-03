//dependencies
var express =  require('express');
var pg = require('pg');
var bodyParser = require('body-parser');
//end dependencies

//db connection pg
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', function() { client.end(); });
//end db connection pg

//express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//end express

// routes
// app.get('/', function(req, res){
//
//     res.send('working');
//
// });
app.use('/api', require('./routes/api'));
//end routes

//start server
app.listen(3000);
console.log('API is running on port 3000');
//en start server
