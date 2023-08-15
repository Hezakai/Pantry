const router = require('express').Router();
const { Inv } = require('../../models')

//gets all inventory items
router.get('/', (req, res) => {
    Inv.findAll().then((invData) => {
        res.json(invData);
    });
});

router.post('/', async (req, res) => {
    try {
        const newInvItem = await Inv.create(
            {
                user_id: req.body.user_id,
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

router.delete('/:name', async (req, res) => {
    try {
        const invData = await Inv.destroy({
            where: {
                name: req.params.name
            }
        })
    
        if (!invData) {
            res.status(404).json({ message: 'Ingredient not found'});
            return;
        }

        res.status(200).json(invData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:name', async (req, res) => {
    try {
        const invData = await Inv.update(req.body, {
            where: {
                name: req.params.name,
            },
        });

        if (!invData) {
            res.status(404).json({ message: 'Ingredient not found'});
            return;
        }

        res.status(200).json(invData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;