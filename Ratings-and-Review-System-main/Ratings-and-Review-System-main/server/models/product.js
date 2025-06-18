const db = require('../db');

exports.getAllProducts = (callback) => {
  db.query('SELECT * FROM products', callback);
};