//This file sets up a one-to-many relationship between the User and Inventory models using Sequelize associations. It allows you to associate inventories with users and ensures that when a user is deleted, their associated inventories are also deleted (cascading delete). Conversely, each Inventory is associated with a single user through a foreign key relationship.

//Model Import
const User = require('./User');
const Inventory = require('./Inventory');

//Establishes a one-to-many association between the User model and the Inventory model. This means that a single user can be associated with multiple inventory items.
//User.hasMany(Inventory, {
//    foreignKey: 'user_id', //specifies the foreign key in the Inventory model that refrences the User model.  This means the Inventory model will have a column named user_id that stores the ID of the associated user.
//    onDelete: 'CASCADE' //When a user is deleted, all associated inventories will also be deleted.
//});

//Establishes a corresponding association from the Inventory model to the User model. This defines that each inventory belongs to a single user.
//Inventory.belongsTo(User, {
//    foreignKey: 'user_id' //Specifies the foreign key in the Project model that references the User model. This matches the foreign key configured in the User.hasMany association.
//});

module.exports = { User, Inventory };