const { Router } = require("express");
const { populateBooks } = require("../controllers/booksController");

const mainRouter = Router();

mainRouter.get("/ping", (req, res) => {
  res.send("pong");
});

mainRouter.get("/poop", async (req, res) => {
  try {
    const books = await populateBooks("books");
    res.send(books);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

mainRouter.get("/b", (req, res) => {});
mainRouter.get("/c", (req, res) => {});

module.exports = mainRouter;
