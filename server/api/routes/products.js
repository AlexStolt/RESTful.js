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
        
    })
    .patch('/:ID', (req, res) => {
        
    })
    .delete('/:ID', (req, res) => {
    });


module.exports = router;