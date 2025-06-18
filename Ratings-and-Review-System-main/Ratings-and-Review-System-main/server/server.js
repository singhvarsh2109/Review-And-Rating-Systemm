const express = require('express');
const cors = require('cors');
const db = require('./db');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const reviewController = require('./controllers/reviewController');

const app = express();
app.use(cors());
app.use(express.json());

// Ensure 'uploads' folder exists (important on Render)
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Serve uploaded images statically
app.use('/uploads', express.static(uploadDir));

// Multer setup for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// Routes

// Get all products
app.get('/api/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Root
app.get('/', (req, res) => {
  res.send('API is running');
});

// Get reviews for a product
app.get('/api/products/:id/reviews', (req, res) => {
  const productId = req.params.id;
  db.query('SELECT * FROM reviews WHERE product_id = ?', [productId], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Add a review with optional image upload
app.post('/api/products/:id/reviews', upload.single('image'), (req, res) => {
  const productId = req.params.id;
  const { username, rating, review } = req.body;
  const image_url = req.file ? `/uploads/${req.file.filename}` : null;
  
  db.query(
    'INSERT INTO reviews (product_id, username, rating, review, image_url) VALUES (?, ?, ?, ?, ?)',
    [productId, username, rating, review, image_url],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: 'Review added!', image_url });
    }
  );
});

// Delete and update review
app.delete('/api/products/:productId/reviews/:reviewId', reviewController.deleteReview);
app.put('/api/products/:productId/reviews/:reviewId', reviewController.updateReview);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
