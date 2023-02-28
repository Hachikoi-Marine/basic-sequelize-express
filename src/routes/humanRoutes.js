const { Router } = require("express")
const {humanModel} = require("../models/main")

const humanRouter = Router()

/* GET ALL HUMANS IN DB */
mainRouter.get("/", (req, res) => {
res.send("a")
})

