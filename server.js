var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var shutterstockRoutes = require('./api/routes/shutterstockRoutes'); //importing route
var unsplashRoutes = require('./api/routes/unsplashRoutes'); //importing route
var adobeStockRoutes = require('./api/routes/adobeStockRoutes'); //importing route

shutterstockRoutes(app); //register the route
unsplashRoutes(app); //register the route
adobeStockRoutes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
