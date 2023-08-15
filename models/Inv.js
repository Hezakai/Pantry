const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/dbConn");

class Inv extends Model {}

Inv.init(
  {
  user_id: {
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
    modelName: 'inv'
  }
  );

module.exports = Inv;
