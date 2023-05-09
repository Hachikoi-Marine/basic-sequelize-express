const { Router } = require("express");
const { humanRouter } = require("./humanRouter");
const { bookRouter } = require("./booksRouter");

const mainRouter = Router();

mainRouter.use("/humans", humanRouter);
mainRouter.use("/books", bookRouter);

// test the server is doing ok
mainRouter.get("/ping", (req, res) => {
  res.send("pong");
});

module.exports = mainRouter;
