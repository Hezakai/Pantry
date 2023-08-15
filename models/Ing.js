const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/dbConn");

class Ing extends Model {}

Ing.init(
  {
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
    modelName: 'ing'
  }
  );

module.exports = Ing;
