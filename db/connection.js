const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Schaefb30!%',
    database: 'election'
  });

module.exports = db;