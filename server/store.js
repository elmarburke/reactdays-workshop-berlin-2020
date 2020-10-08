const { Sequelize } = require("sequelize");

const createStore = async () => {
  const db = new Sequelize({
    dialect: "sqlite",
    storage: "./store.sqlite",
  });

  const messages = db.define("message", {
    text: Sequelize.TEXT,
    author: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  });

  await db.sync({ force: true });

  return { db, messages };
};

module.exports = createStore;
