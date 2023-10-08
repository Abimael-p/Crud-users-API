const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");
const { v4: uuidv4 } = require("uuid");

const user = sequelize.define("user", {
  id: {
    type: DataTypes.STRING(10),
    primaryKey: true,
    defaultValue: () => uuidv4().slice(0, 10),
  },
  firstName: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(150),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  birthday: {
    type: DataTypes.DATE,
  },
});

module.exports = user;
