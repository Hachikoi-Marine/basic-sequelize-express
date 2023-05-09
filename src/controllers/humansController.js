const { Book, Human } = require("../models");

const populateHumans = async () => {
  const humansArr = [{ name: "Alice" }, { name: "Jhon" }, { name: "Marcus" }];

  await Human.bulkCreate(humansArr, { include: Book });
  const humans = await Human.findAll();
  return humans;
};

module.exports = { populateHumans };
