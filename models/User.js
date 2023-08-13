//This code defines a Sequelize model for a user with attributes like name, email, and hashed password. It ensures that the password is securely hashed before being stored in the database and provides a method to check the validity of a provided password against the stored hash.


//Dependency imports 
const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/dbConn");


//The class User extends Model line defines a class named User that extends the Model class provided by Sequelize.
class User extends Model {
    //This method uses bcrypt's compareSync function to compare a provided password (loginPw) with the stored hashed password (this.password) for the user.
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

//Initializes the User model with its attributes and options.
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      alowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
    //Hooks to hash the user's password before creating or updating the user data in the database. The password is hashed using bcrypt with a cost factor of 10.
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
    sequelize,  //Specifies the Sequelize instance to be used
    timestamps: false, //Disables the automatic creation of createdAt and updatedAt fields in the database.
    freezeTableName: true, // Ensures that the table name in the database matches the model name.
    underscored: true, // Converts camelCase attribute names to snake_case column names in the database.
    modelName: "user", //Specifies the name of the model.
  }
);

module.exports = User;
