import { Sequelize } from "sequelize";

const db = new Sequelize("amt", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
