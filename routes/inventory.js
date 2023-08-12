const router = require('express').Router();
const Inventory = require('../models/Inventory')

//gets all inventory items
router.get('/inv', (req, res) => {
    Inventory.findAll().then((invData) => {
        res.json(invData);
    });
});



module.exports = router;