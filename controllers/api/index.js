const router = require('express').Router();
const userRoute = require('./user')
const invRoute = require('./inventory')


router.use('/user', userRoute)
router.use('/inv', invRoute)

module.exports = router;