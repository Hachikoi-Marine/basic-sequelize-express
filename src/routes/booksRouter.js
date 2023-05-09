const { Router } = require("express");
const {
  populateBooks,
  getAllBooks,
  bookGotOwned,
} = require("../controllers/booksController");

const bookRouter = Router();

// Get all books
bookRouter.get("/", async (req, res) => {
  try {
    const books = await getAllBooks();

    res.send(books);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
});

// Get book by id
bookRouter.get("/:id", (req, res) => {});

// popoulate db with books
bookRouter.get("/poop", async (req, res) => {
  try {
    const books = await populateBooks();
    res.send(books);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// ? aint working and I got tired of using JS ICANT ICANT HELP
// make book id to be owned by everyone
bookRouter.get("/own:id", async (req, res) => {
  const { id } = req.params;

  try {
    const book = await bookGotOwned(id);
    res.send(book);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = { bookRouter };
