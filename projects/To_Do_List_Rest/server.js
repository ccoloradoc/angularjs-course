//Created: Cristian Colorado (@srrobo) 
//Credits: Based on work by Sevilleja(@sevilayha)
// 	 URL: https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4

// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');

var SpidyDB	   = require('spidydb');
var generateRoutes = require('./lib/routes-generator');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

var db = new SpidyDB('./db');

// Serve Static content for Root
app.use('/', serveStatic(__dirname));

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

//Create a REST Routes for each schema in database
router = generateRoutes(router, db);

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);