const { Sequelize } = require("sequelize");

const createStore = async () => {
  const db = new Sequelize({
    dialect: "sqlite",
    storage: "./store.sqlite",
  });

  const messages = db.define("message", {
    text: Sequelize.TEXT,
    authorId: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  });

  const people = db.define("person", {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: Sequelize.STRING,
  });

  await db.sync({ force: true });

  await people.create({
    firstName: "Elmar",
    lastName: "Burke",
    email: "hi@elmar.codes",
  });

  return { db, messages, people };
};

module.exports = createStore;
