const { DataTypes, Op } = require("sequelize")
const sequelize = require("../db")

const Home = sequelize.define("Home", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    defaultValue: 13
  }
},
  {
    timestamps: false,
  }
)

module.exports = Home;
