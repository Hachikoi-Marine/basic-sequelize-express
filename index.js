const express = require("express")
require("dotenv").config()
const sequelize = require("./src/db")
const app = require("./src/app")

const PORT = process.env.PORT || 1313
 
sequelize.sync().then(() => {
  console.log("Connected to db")
  app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
  })
})
