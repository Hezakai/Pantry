const sequelize = require('../config/connection');
const { User, Inv, Rec, Ing, Step, List } = require('../models');
const ingData = require('./ingData.json');
const invData = require('./invData.json');
const recData = require('./recData.json');
const stepData = require('./stepData.json');
const userData = require('./userData.json');

const seedDB = async () => {
    await sequelize.sync({force: true});

    const user = await User.bulkCreate(userData, {  
        individualHooks: true,
        returning: true,
    });

    const inv = await Inv.bulkCreate(invData, {  
        individualHooks: true,
        returning: true,
    });

    const rec = await Rec.bulkCreate(recData, {  
        individualHooks: true,
        returning: true,
    });

    const ing = await Ing.bulkCreate(ingData, {  
        individualHooks: true,
        returning: true,
    });

    const step = await Step.bulkCreate(stepData, {  
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDB();