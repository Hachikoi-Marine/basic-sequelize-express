const { Book } = require("../models/Book");

const populateBooks = async () => {
  const booksArr = [
    { title: "The Green Vile" },
    { title: "The Methamorphosis" },
    { title: "The subtitle art of not giving a fuck" },
  ];

  await Book.bulkCreate(booksArr, { include: Recipe });
  const books = await Book.findAll();
  return books;
};

module.exports = {
  populateBooks,
};
