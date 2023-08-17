const router = require('express').Router();
const userRoute = require('./user')
const invRoute = require('./inv')
const ingRoute = require('./ing')
const recRoute = require('./rec')
const stepRoute = require('./step')
const listRoute = require('./list')


router.use('/user', userRoute)
router.use('/inv', invRoute)
router.use('/ing', ingRoute)
router.use('/rec', recRoute)
router.use('/step', stepRoute)
router.use('./list', listRoute)

module.exports = router;