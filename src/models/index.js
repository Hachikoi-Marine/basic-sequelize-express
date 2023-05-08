const Human = require("./Human");
const Book = require("./Book");

// Make relationships here :D
Human.belongsToMany(Book, {
  through: "Books_Humans",
  foreignKey: "HumanId",
});

Book.belongsToMany(Human, {
  through: "Books_Humans",
  foreignKey: "BookId",
});

module.exports = { Human, Book };
