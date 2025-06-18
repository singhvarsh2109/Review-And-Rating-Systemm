import React, { useEffect, useState } from 'react';
import RatingStars from './RatingStars';

function ReviewList({ productId, refresh }) {
  const [reviews, setReviews] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editRating, setEditRating] = useState(5);
  const [editReview, setEditReview] = useState('');
  const [editUsername, setEditUsername] = useState('');

  useEffect(() => {
    fetch(`https://ratings-and-review-system.onrender.com/api/products/${productId}/reviews`)
      .then(res => res.json())
      .then(data => setReviews(data));
  }, [productId, refresh]);

  const handleDelete = (reviewId) => {
    fetch(`https://ratings-and-review-system.onrender.com/api/products/${productId}/reviews/${reviewId}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(() => {
        setReviews(reviews.filter(r => r.id !== reviewId));
        if (typeof refresh === 'function') refresh();
      });
  };

  const startEdit = (review) => {
    setEditingId(review.id);
    setEditRating(review.rating);
    setEditReview(review.review);
    setEditUsername(review.username);
  };

  const handleEditSave = (reviewId) => {
    fetch(`https://ratings-and-review-system.onrender.com/api/products/${productId}/reviews/${reviewId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: editUsername,
        rating: editRating,
        review: editReview
      })
    })
      .then(res => res.json())
      .then(() => {
        setEditingId(null);
        setEditRating(5);
        setEditReview('');
        setEditUsername('');
        // Refresh reviews
        fetch(`https://ratings-and-review-system.onrender.com/api/products/${productId}/reviews`)
          .then(res => res.json())
          .then(data => setReviews(data));
        if (typeof refresh === 'function') refresh();
      });
  };

  const handleEditCancel = () => {
    setEditingId(null);
    setEditRating(5);
    setEditReview('');
    setEditUsername('');
  };

  return (
    <div>
      <h4>Reviews</h4>
      {reviews.length === 0 && <p>No reviews yet.</p>}
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <strong>
              {review.username.charAt(0).toUpperCase() + review.username.slice(1)}
            </strong>
            <br />
            {editingId === review.id ? (
              <>
                <span>
                  <select
                    value={editRating}
                    onChange={e => setEditRating(Number(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5].map(n => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </span>
                <br />
                <textarea
                  value={editReview}
                  onChange={e => setEditReview(e.target.value)}
                  rows={2}
                  style={{ width: '90%', marginTop: '6px' }}
                />
                <br />
                <button onClick={() => handleEditSave(review.id)}>Save</button>
                <button onClick={handleEditCancel} style={{ marginLeft: '8px' }}>Cancel</button>
              </>
            ) : (
              <>
                <span className="rating-stars">
                  {'★'.repeat(review.rating)}
                  {'☆'.repeat(5 - review.rating)}
                </span>
                <br />
                {review.review}
                {review.image_url && (
                  <div>
                    <img
                      src={`https://ratings-and-review-system.onrender.com${review.image_url}`}
                      alt="Review"
                      style={{ maxWidth: '120px', marginTop: '8px', borderRadius: '8px' }}
                    />
                  </div>
                )}
                <br />
                <button onClick={() => handleDelete(review.id)}>Delete</button>
                <button onClick={() => startEdit(review)} style={{ marginLeft: '8px' }}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewList;
