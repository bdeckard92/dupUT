const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  // Your username,
  user: "root",
  // Your password
  password: "password",
  database: "election"
});

module.exports = connection;
