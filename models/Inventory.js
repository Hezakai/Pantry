const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/dbConn");

class Inventory extends Model {}

Inventory.init(
  {
  user_id: {
    type: DataTypes.INTEGER,
  },
  recipe_id: {
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
  amount: {
    type: DataTypes.FLOAT,
  },
  unit: {
    type: DataTypes.STRING,
  },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'inventory'
  }
  );

module.exports = Inventory;
