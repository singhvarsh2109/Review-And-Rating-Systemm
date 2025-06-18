import React from 'react';

function RatingStars({ rating }) {
  return (
    <span>
      {'★'.repeat(rating)}
      {'☆'.repeat(5 - rating)}
    </span>
  );
}

export default RatingStars;