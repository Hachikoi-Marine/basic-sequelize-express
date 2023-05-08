const { Router } = require("express");
const { Human } = require("../models");

const humanRouter = Router();

/* GET ALL HUMANS IN DB */
mainRouter.get("/", (req, res) => {
  res.send("a");
});
