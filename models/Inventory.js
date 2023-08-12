const Sequelize = require('sequelize')
const db = require('../config/dbConn')

const Inventory = db.define('inv', {
    name: {
        type: Sequelize.STRING
    },
    amount: {
        type: Sequelize.FLOAT
    },
    unit: {
        type: Sequelize.STRING
    },
})

module.exports = Inventory;