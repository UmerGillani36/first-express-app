const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Pasha1998*", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
