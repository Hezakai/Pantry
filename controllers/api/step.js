const router = require('express').Router();
const { Step } = require('../../models')

//gets all steps
router.get('/', (req, res) => {
    Step.findAll().then((stepData) => {
        res.json(stepData);
    });
});

router.post('/', async (req, res) => {
    try {
        const newStepItem = await Step.create(
            {
                rec_id: req.body.rec_id,
                number: req.body.number,
                text: req.body.text
            }
        );

        res.status(200).json(newStepItem);
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const stepData = await Step.destroy({
            where: {
                id: req.params.id
            }
        })
    
        if (!stepData) {
            res.status(404).json({ message: 'Step not found'});
            return;
        }

        res.status(200).json(stepData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const stepData = await Step.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (!stepData) {
            res.status(404).json({ message: 'Step not found'});
            return;
        }

        res.status(200).json(stepData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;