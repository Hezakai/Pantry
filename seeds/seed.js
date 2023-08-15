const sequelize = require('../config/dbConn');
// const Model = require('../models/index');
// const invData = require('./invData.json');

const seedDB = async () => {
    await sequelize.sync({force: true});

    // const invs = await Inventory.bulkCreate(invData, {  //commented out to prevent seed
    //     individualHooks: true,
    //     returning: true,
    // });

    process.exit(0);
};

seedDB();