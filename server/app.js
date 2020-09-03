const express = require('express');
const morgan = require('morgan'); //Log Requests
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

const app = express();

//Log Requests
app.use(morgan('dev'));

//Setup Middleware 
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

//Handle Errors since All Middleware Layers Were Skipped
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error); //next() can have an optional new Error as a parameter
});


app.use((error, alex, req, res, next) => {
    res.status(error.status);
    res.send({
        message: error.message,
        name: alex
    })
});


module.exports = app;
