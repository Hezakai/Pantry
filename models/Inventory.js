const Sequelize = require('sequelize')
const db = require('../config/database')

const Inventory = db.define('inv', {
    name: {
        type: Sequelize.STRING
    },
    amount: {
        type: Sequelize.INTEGER
    },
    unit: {
        type: Sequelize.STRING
    },
})

module.exports = Inventory;