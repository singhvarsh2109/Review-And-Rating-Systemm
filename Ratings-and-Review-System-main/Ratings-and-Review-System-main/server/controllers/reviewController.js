const reviewModel = require('../models/review');

// Get reviews for a specific product
exports.getReviews = (req, res) => {
  const productId = req.params.productId;
  reviewModel.getReviewsByProductId(productId, (err, results) => {
    if (err) return res.status(500).json({ message: 'Error retrieving reviews', error: err });
    res.status(200).json(results);
  });
};

// Submit a review for a specific product
exports.submitReview = (req, res) => {
    const productId = req.params.productId;
    const { username, rating, review } = req.body;
    reviewModel.addReview(productId, username, rating, review, (err, result) => {
        if (err) return res.status(500).json({ message: 'Error adding review', error: err });
        res.status(201).json({ message: 'Review added!' });
    });
};

// Update a review for a specific product
exports.updateReview = (req, res) => {
    const productId = req.params.productId;
    const reviewId = req.params.reviewId;
    const { username, rating, review } = req.body;
    reviewModel.updateReview(productId, reviewId, username, rating, review, (err, result) => {
        if (err) return res.status(500).json({ message: 'Error updating review', error: err });
        res.status(200).json({ message: 'Review updated!' });
    });
};

// Delete a review for a specific product
exports.deleteReview = (req, res) => {
    const productId = req.params.productId;
    const reviewId = req.params.reviewId;
    reviewModel.deleteReview(productId, reviewId, (err, result) => {
        if (err) return res.status(500).json({ message: 'Error deleting review', error: err });
        res.status(200).json({ message: 'Review deleted!' });
    });
};