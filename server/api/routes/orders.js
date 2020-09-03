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
    .delete('/:ID', (req, res) => {
        //Extract ID
        const id = req.params.id;
        
    })

module.exports = router;