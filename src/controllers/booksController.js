const { Book, Human } = require("../models");

const populateBooks = async () => {
  const booksArr = [
    { title: "The Green Vile" },
    { title: "The Methamorphosis" },
    { title: "The subtitle art of not giving a fuck" },
  ];

  await Book.bulkCreate(booksArr, { include: Human });
  const books = await Book.findAll();
  return books;
};

const getAllBooks = async () => {
  const res = await Book.findAll({ include: Human });
  return res;
};

const bookGotOwned = async (id) => {
  const humans = await Human.findAll();
  const foundBook = Book.findByPk(+id);
  await foundBook.setHumans(humans);

  const novoBook = await Book.findByPk(+id);
  return novoBook;
};

module.exports = {
  populateBooks,
  getAllBooks,
  bookGotOwned,
};
