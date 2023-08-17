//This file sets up a one-to-many relationship between the User and Inventory models using Sequelize associations. It allows you to associate inventories with users and ensures that when a user is deleted, their associated inventories are also deleted (cascading delete). Conversely, each Inventory is associated with a single user through a foreign key relationship.

//Model Import
const User = require('./User');
const Inv = require('./Inv');
const Ing = require('./Ing');
const Rec = require('./Rec');
const Step = require('./Step');
const List = require('./List')

// Establishes a one-to-many association between the User model and the Inventory model. This means that a single user can be associated with multiple inventory items.
User.hasMany(Inv, {
   foreignKey: 'user_id', //specifies the foreign key in the Inventory model that refrences the User model.  This means the Inventory model will have a column named user_id that stores the ID of the associated user.
   onDelete: 'CASCADE' //When a user is deleted, all associated inventories will also be deleted.
});

User.hasMany(Rec, {
   foreignKey: 'user_id',
   onDelete: 'CASCADE' // When a user is deleted, all associated recipes will also be deleted.
});

User.hasMany(List, {
   foreignKey: 'user_id'
});

List.belongsTo(User, {
   foreignKey: 'user_id'
});

// Establishes a corresponding association from the Inventory model to the User model. This defines that each inventory belongs to a single user.
Inv.belongsTo(User, {
   foreignKey: 'user_id' //Specifies the foreign key in the Project model that references the User model. This matches the foreign key configured in the User.hasMany association.
});

Rec.belongsTo(User, {
   foreignKey: 'user_id'
});

Rec.hasMany(Ing, {
   foreignKey: 'rec_id',
   onDelete: 'CASCADE'
 });

 Rec.hasMany(Step, {
   foreignKey: 'rec_id',
   onDelete: 'CASCADE'
 });
 
 Ing.belongsTo(Rec, {
   foreignKey: 'rec_id'
 });

 Step.belongsTo(Rec, {
   foreignKey: 'rec_id'
 });


module.exports = { User, Inv, Ing, Rec, Step, List };