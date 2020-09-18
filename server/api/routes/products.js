const { json } = require('body-parser');
const express = require('express');

//Create A Router for Resources
const router = express.Router();

router
    .get('/', (req, res) => {

    })
    .get('/:ID', (req, res) => {
        //Extract ID
        const id = req.params.id;
        
    })
    .post('/', (req, res) => {
        const product = {
            name: req.body.name,    //Key: JSON Key from Postman 
            price: req.body.price   //Key: JSON Key from Postman
        }
        res.status(201).json({
            message: "Serving Requested Product Data",
            product: product
        })
    })
    .patch('/:ID', (req, res) => {
        
    })
    .delete('/:ID', (req, res) => {
    });


module.exports = router;