import React, { useState } from 'react';

function ReviewForm({ productId, onReviewAdded }) {
  const [username, setUsername] = useState('');
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState('');

const handleSubmit = e => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('username', username);
  formData.append('rating', rating);
  formData.append('review', review);
  if (imageFile) formData.append('image', imageFile);

  fetch(`https://ratings-and-review-system.onrender.com/api/products/${productId}/reviews`, {
    method: 'POST',
    body: formData
  })
    .then(res => res.json())
    .then(data => {
      setMessage('Review submitted!');
      setUsername('');
      setRating(5);
      setReview('');
      setImageFile(null);
      if (onReviewAdded) onReviewAdded();
    })
    .catch(() => setMessage('Error submitting review.'));
};
  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <h4>Add a Review</h4>
      <input
        type="text"
        placeholder="Your name"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
      /><br />
      <label>
        Rating:
        <select value={rating} onChange={e => setRating(Number(e.target.value))}>
          {[1,2,3,4,5].map(n => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </label><br />
      <textarea
        placeholder="Your review"
        value={review}
        onChange={e => setReview(e.target.value)}
        required
      /><br />
      <input
        type="file"
        accept="image/*"
        onChange={e => setImageFile(e.target.files[0])}
      /><br />
      <button type="submit">Submit</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default ReviewForm;
