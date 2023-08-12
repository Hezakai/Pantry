const express = require('express');
const router = express.Router();
const dv = require('../config/dbConn');
const Inv = require('../models/Inventory')

router.get('/', (req, res) => 
Inv.findAll()
    .then(inv => {
        console.log(inv);
        res.sendStatus(200);
    })
    .catch(err => console.log(err)));

module.exports = router;