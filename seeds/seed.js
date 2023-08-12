const sequelize = require('../config/dbConn');
const Inventory = require('../models/Inventory');
const invData = require('./invData.json');

const seedDB = async () => {
    await sequelize.sync({force: true});

    const invs = await Inventory.bulkCreate(invData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDB();