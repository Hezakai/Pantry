const router = require('express').Router();
const { Inventory, User } = require('../models')

//gets all inventory items
router.get('/', (req, res) => {
    Inventory.findAll().then((invData) => {
        res.json(invData);
    });
});

router.post('/', async (req, res) => {
    try {
        const newInvItem = await Inventory.create(
            {
                name: req.body.name,
                amount: req.body.amount,
                unit: req.body.unit
            }
        );

        res.status(200).json(newInvItem);
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err.message });
    }
});


module.exports = router;