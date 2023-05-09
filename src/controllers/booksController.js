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

module.exports = {
  populateBooks,
};
