const sequelize = require('../config/connection');
const { User, Inv, Rec, Ing, Step } = require('../models');
const invData = require('./invData.json');

const seedDB = async () => {
    await sequelize.sync({force: true});

    const ing = await Ing.bulkCreate(invData, {  
        individualHooks: true,
        returning: true,
    });

    const inv = await Inv.bulkCreate(invData, {  
        individualHooks: true,
        returning: true,
    });

    const rec = await Rec.bulkCreate(invData, {  
        individualHooks: true,
        returning: true,
    });

    const step = await Step.bulkCreate(invData, {  
        individualHooks: true,
        returning: true,
    });

    const user = await User.bulkCreate(invData, {  
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDB();