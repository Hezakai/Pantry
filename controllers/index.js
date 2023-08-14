const router = require('express').Router();
//const userRoute = require('./user')
const invRoute = require('./inventory')


//router.use('/user', './user')
router.use('/inv', invRoute)

module.exports = router;