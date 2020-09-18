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
        const order = {
            orderId: req.body.orderId,
            quantity: req.body.quantity
        }
        res.status(201).json({
            message: "Serving Requested Orders Data",
            order: order
        })
    })
    .delete('/:ID', (req, res) => {
        //Extract ID
        const id = req.params.id;
        
    })

module.exports = router;