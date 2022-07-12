const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Schaefb30!%',
    database: 'election'
  },
  console.log('Connected to the election database')
);

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World'
  });
});

db.query(`SELECT * FROM  candidates WHERE id = 1`, (err, rows) => {
  if (err) {
    console.log(err);
  }
  console.log(rows);
});

// // Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// Create candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
values (?,?,?,?)`;

const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
})

app.use((req, res) => {
  res.status(404).end();
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});