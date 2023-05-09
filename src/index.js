require("dotenv").config();
const sequelize = require("./db");
const app = require("./app");

const PORT = process.env.PORT || 3000;

// { alter | force: true }
sequelize.sync({ alter: true }).then(() => {
  console.log("Connected to db :D");
  app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
  });
});
