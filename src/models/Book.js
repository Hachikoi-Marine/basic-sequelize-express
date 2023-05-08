const { DataTypes, Op } = require("sequelize");
const sequelize = require("../db");

const Book = sequelize.define(
  "Book",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    desc: {
      type: DataTypes.STRING,
      defaultValue: "no description, me lazy",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Book;
