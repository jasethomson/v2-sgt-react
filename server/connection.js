const db = require('pg');
const connection = db.createConnection({
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_DATABASE
});

module.exports = connection;
