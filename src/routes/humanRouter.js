const { Router } = require("express");
const { populateHumans } = require("../controllers/humansController");

const humanRouter = Router();

humanRouter.get("/c", (req, res) => {});

// popoulate db with books
humanRouter.get("/poop", async (req, res) => {
  try {
    const books = await populateHumans();
    res.send(books);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

/* GET ALL HUMANS IN DB */
module.exports = { humanRouter };
