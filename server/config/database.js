import { Sequelize } from "sequelize";
import "dotenv/config";

const connection = process.env.DB_CONNECTION;
const hostname = process.env.DB_HOST;
const database = process.env.DB_DATABASE;
const port = process.env.DB_PORT;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

// Connection
const db = new Sequelize(database, username, password, {
  host: hostname,
  dialect: connection,
});

export default db;
