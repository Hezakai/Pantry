const router = require('express').Router();
const { Ing } = require('../../models')

//gets all ingredient items
router.get('/', (req, res) => {
    Ing.findAll().then((ingData) => {
        res.json(ingData);
    });
});

router.post('/', async (req, res) => {
    try {
        const newIngItem = await Ing.create(
            {
                name: req.body.name,
                amount: req.body.amount,
                unit: req.body.unit
            }
        );

        res.status(200).json(newIngItem);
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err.message });
    }
});

router.delete('/:name', async (req, res) => {
    try {
        const ingData = await Ing.destroy({
            where: {
                name: req.params.name
            }
        })
    
        if (!ingData) {
            res.status(404).json({ message: 'Ingredient not found'});
            return;
        }

        res.status(200).json(ingData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:name', async (req, res) => {
    try {
        const ingData = await Ing.update(req.body, {
            where: {
                name: req.params.name,
            },
        });

        if (!ingData) {
            res.status(404).json({ message: 'Ingredient not found'});
            return;
        }

        res.status(200).json(ingData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;