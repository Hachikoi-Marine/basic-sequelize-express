const { Router } = require("express")

const mainRouter = Router()
mainRouter.get("/", (req, res) => {
  res.send("DICKS")
})
mainRouter.get("/a", (req, res) => { })
mainRouter.get("/b", (req, res) => { })
mainRouter.get("/c", (req, res) => { })

module.exports = mainRouter
