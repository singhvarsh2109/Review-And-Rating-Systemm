const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',              // your local MySQL username
  password: 'Ankita@2323',              // your local MySQL password (fill in if set)
  database: 'ratingsdb'      // your database name in MySQL Workbench
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});

module.exports = db;
