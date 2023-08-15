const router = require('express').Router();
const userRoute = require('./user')
const invRoute = require('./inv')
const ingRoute = require('./ing')


router.use('/user', userRoute)
router.use('/inv', invRoute)
router.use('/ing', ingRoute)

module.exports = router;