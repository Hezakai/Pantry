const router = require('express').Router();
const { List } = require('../../models')

//gets all inventory items
router.get('/', (req, res) => {
    List.findAll().then((listData) => {
        res.json(listData);
    });
});

router.post('/', async (req, res) => {
    try {
        const newListItem = await List.create(
            {
                user_id: req.body.user_id,
                name: req.body.name,
                amount: req.body.amount,
                unit: req.body.unit
            }
        );

        res.status(200).json(newListItem);
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err.message });
    }
});

router.delete('/:name', async (req, res) => {
    try {
        const listData = await List.destroy({
            where: {
                name: req.params.name
            }
        })
    
        if (!listData) {
            res.status(404).json({ message: 'Ingredient not found'});
            return;
        }

        res.status(200).json(listData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:name', async (req, res) => {
    try {
        const listData = await List.update(req.body, {
            where: {
                name: req.params.name,
            },
        });

        if (!listData) {
            res.status(404).json({ message: 'Ingredient not found'});
            return;
        }

        res.status(200).json(listData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;