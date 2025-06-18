const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

// Submit a review for a specific product
router.post('/:productId', reviewController.submitReview);

// Get reviews for a specific product
router.get('/:productId', reviewController.getReviews);

// Update a review for a specific product
// router.put('/:productId/:reviewId', reviewController.updateReview);

// Delete a review for a specific product
// router.delete('/api/products/:productId/reviews/:reviewId', reviewController.deleteReview);

module.exports = router;