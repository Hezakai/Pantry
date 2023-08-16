const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Step extends Model {}

Step.init(
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
    number: {
      type: DataTypes.INTEGER,
    },
    text: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "step",
  }
);

module.exports = Step;
