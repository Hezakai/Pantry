const sequelize = require('../config/connection');
const { User, Inv, Rec, Ing, Step, List } = require('../models');
const ingData = require('./ingData.json');
const invData = require('./invData.json');
const recData = require('./recData.json');
const stepData = require('./stepData.json');
const userData = require('./userData.json');

const seedDB = async () => {
    await sequelize.sync({ force: true });

    const users = [];
    for (let data of userData) {
        const user = await User.create(data, {
            individualHooks: true,
            returning: true
        });
        users.push(user);
    }

    const invs = [];
    for (let data of invData) {
        const inv = await Inv.create(data, {
            individualHooks: true,
            returning: true
        });
        invs.push(inv);
    }

    const recs = [];
    for (let data of recData) {
        const rec = await Rec.create(data, {
            individualHooks: true,
            returning: true
        });
        recs.push(rec);
    }

    const ings = [];
    for (let data of ingData) {
        const ing = await Ing.create(data, {
            individualHooks: true,
            returning: true
        });
        ings.push(ing);
    }

    const steps = [];
    for (let data of stepData) {
        const step = await Step.create(data, {
            individualHooks: true,
            returning: true
        });
        steps.push(step);
    }

    process.exit(0);
};

seedDB();


// const sequelize = require('../config/connection');
// const { User, Inv, Rec, Ing, Step, List } = require('../models');
// const ingData = require('./ingData.json');
// const invData = require('./invData.json');
// const recData = require('./recData.json');
// const stepData = require('./stepData.json');
// const userData = require('./userData.json');

// const seedDB = async () => {
//     await sequelize.sync({force: true});

//     const user = await User.bulkCreate(userData, {  
//         individualHooks: true,
//         returning: true,
//     });

//     const inv = await Inv.bulkCreate(invData, {  
//         individualHooks: true,
//         returning: true,
//     });

//     const rec = await Rec.bulkCreate(recData, {  
//         individualHooks: true,
//         returning: true,
//     });

//     const ing = await Ing.bulkCreate(ingData, {  
//         individualHooks: true,
//         returning: true,
//     });

//     const step = await Step.bulkCreate(stepData, {  
//         individualHooks: true,
//         returning: true,
//     });

//     process.exit(0);
// };

// seedDB();