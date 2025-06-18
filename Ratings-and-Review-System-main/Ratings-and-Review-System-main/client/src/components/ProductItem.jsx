import React, { useState } from 'react';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

function ProductItem({ product }) {
  const [showReviews, setShowReviews] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const handleReviewAdded = () => setRefresh(!refresh);

  return (
    <div style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button onClick={() => setShowReviews(!showReviews)}>
        {showReviews ? 'Hide Reviews' : 'Show Reviews'}
      </button>
      {showReviews && (
        <>
          <ReviewList productId={product.id} />
          <ReviewForm productId={product.id} onReviewAdded={handleReviewAdded} />
        </>
      )}
    </div>
  );
}

export default ProductItem;