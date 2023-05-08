require("dotenv").config();
const Sequelize = require("sequelize");

const { DATABASE_URL } = process.env;
const SEQUELIZE_URL = DATABASE_URL || "";

const sequelize = new Sequelize(SEQUELIZE_URL, {
  dialect: "postgres",
  // logging: true, true by default
});

module.exports = sequelize;
