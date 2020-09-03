const express = require('express');

const app = express();

//Setup Middleware 
app.use((req, res, next) => {
    res.send('Gekk');
});



module.exports = app;
