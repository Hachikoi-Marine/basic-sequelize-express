const Sequelize = require("sequelize")
require("dotenv").config()

const { DB_USER, DB_PSW, DB_PORT, DB_HOST, DB_NAME } = process.env
const SEQUELIZE_URL = `postgres://${DB_USER}:${DB_PSW}@${DB_HOST}:${DB_PORT}/${DB_NAME}`

const sequelize = new Sequelize(SEQUELIZE_URL, {
  dialect: "postgres",
/*   logging: true */
})

module.exports = sequelize
