const router = require('express').Router();
const { Inventory, User } = require('../models')

//gets all inventory items
router.get('/inv', (req, res) => {
    Inventory.findAll().then((invData) => {
        res.json(invData);
    });
});



module.exports = router;