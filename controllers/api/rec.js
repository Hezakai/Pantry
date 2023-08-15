const router = require('express').Router();
const { Rec } = require('../../models')

router.get('/', (req, res) => {
    Rec.findAll().then((recData) => {
        res.json(recData);
    });
});

router.post('/', async (req, res) => {
    try {
        const newRec = await Rec.create(
            {
                user_id: req.body.user_id,
                rec_name: req.body.rec_name,
            }
        );

        res.status(200).json(newRec);
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err.message });
    }
});


module.exports = router;