const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/dbConn");

class Ing extends Model {}

Ing.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    rec_id: { 
      type: DataTypes.INTEGER,
      references: {
        model: 'rec',
        key: 'id',
      },
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
    modelName: "ing",
  }
);

module.exports = Ing;
