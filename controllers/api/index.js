const router = require('express').Router();
const userRoute = require('./user')
const invRoute = require('./inv')
const ingRoute = require('./ing')
const recRoute = require('./rec')


router.use('/user', userRoute)
router.use('/inv', invRoute)
router.use('/ing', ingRoute)
router.use('/rec', recRoute)

module.exports = router;