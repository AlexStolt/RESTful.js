const express = require('express');
const morgan = require('morgan'); //Log Requests
const bodyParser = require('body-parser');
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

//APP
const app = express();

//Log Requests
app.use(morgan('dev'));

//Parse JSON and POST(URLENCODED) Body Data
//Body Is Parsed Only Here as a Middleware
app.use(bodyParser.urlencoded({extended: false})); //First Parse Body and Then Continue
app.use(bodyParser.json());

//Allow CORS For Remote Access
app.use((req, res, next) => {
    //Send a HEADER to Allow CORS to ALL Clients(thats what '*' means)
    res.header('Access-Control-Allow-Origin', '*');
    //Which types of HEADERS to Accept
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    //If First Request from Browser (this is called OPTIONS request)
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET, POST');
        res.status(200).json({});
    }
    next();
});

//Setup Middleware 
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

//Handle Errors since All Middleware Layers Were Skipped
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error); //next() can have an optional new Error as a parameter
});


module.exports = app;
