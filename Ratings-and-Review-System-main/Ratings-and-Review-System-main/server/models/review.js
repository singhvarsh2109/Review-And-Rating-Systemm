const db = require('../db');

exports.getReviewsByProductId = (productId, callback) => {
  db.query('SELECT * FROM reviews WHERE product_id = ?', [productId], callback);
};

exports.addReview = (productId, username, rating, review, callback) => {
  db.query(
    'INSERT INTO reviews (product_id, username, rating, review) VALUES (?, ?, ?, ?)',
    [productId, username, rating, review],
    callback
  );
};
exports.updateReview = (productId, reviewId, username, rating, review, callback) => {
  db.query(
    'UPDATE reviews SET username = ?, rating = ?, review = ? WHERE product_id = ? AND id = ?',
    [username, rating, review, productId, reviewId],
    callback
  );
};
exports.deleteReview = (productId, reviewId, callback) => {
  db.query(
    'DELETE FROM reviews WHERE product_id = ? AND id = ?',
    [productId, reviewId],
    callback
  );
};