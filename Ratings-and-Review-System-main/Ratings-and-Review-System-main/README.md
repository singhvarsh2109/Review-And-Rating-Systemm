# 🌟 Ratings and Review System

<div align="center">

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)

**A modern, full-stack web application for product ratings and reviews**

[Demo](#demo) • [Features](#features) • [Installation](#installation) • [Usage](#usage) • [API Documentation](#api-documentation)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Usage](#usage)
- [License](#license)
- [Contact](#contact)

---

## 🎯 Overview

The **Ratings and Review System** is a comprehensive web application that enables users to browse products, view detailed ratings, and submit their own reviews. Built with modern web technologies, it provides a seamless user experience with real-time data updates and responsive design.

### Key Highlights
- ⚡ **Fast & Responsive** - Built with React for optimal performance
- 🔒 **Reliable Backend** - Node.js with Express for robust API handling
- 💾 **Persistent Storage** - MySQL database for data integrity
- 🎨 **Modern UI** - Clean and intuitive user interface
- 📱 **Mobile Friendly** - Responsive design for all devices

---

## ✨ Features

### 🛍️ **Product Management**
- Browse comprehensive product listings
- Product categorization and filtering

### ⭐ **Rating System**
- 5-star rating mechanism
- Interactive rating display
- Visual rating indicators

### 📝 **Review Management**
- Submit detailed product reviews
- View all reviews for each product
- Chronological review display
- Review validation and moderation

### 🔧 **Additional Features**
- Responsive web design
- Real-time data updates
- Error handling and validation
- Clean and intuitive UI/UX

---

## 🛠️ Tech Stack

### Frontend
- **React.js** - Modern JavaScript library for building user interfaces
- **CSS3** - Styling and responsive design
- **Axios** - HTTP client for API requests

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MySQL** - Relational database management system
- **CORS** - Cross-origin resource sharing

### Development Tools
- **npm** - Package manager
- **Git** - Version control system

---

## 📂 Project Structure

```
Ratings-and-Review-System/
├── 📁 client/                    # Frontend React Application
│   ├── 📁 public/
│   │   └── 📄 index.html        # HTML template
│   ├── 📁 src/
│   │   ├── 📁 components/       # React Components
│   │   │   ├── 📄 ProductList.jsx    # Product listing component
│   │   │   ├── 📄 ProductItem.jsx    # Individual product component
│   │   │   ├── 📄 RatingForm.jsx     # Rating submission form
│   │   │   └── 📄 ReviewForm.jsx     # Review submission form
│   │   ├── 📄 App.css       # Main application styles
│   │   ├── 📄 App.jsx           # Main App component
│   │   └── 📄 index.js          # React entry point
│   └── 📄 package.json          # Frontend dependencies
├── 📁 server/                   # Backend Node.js Application
│   ├── 📁 controllers/          # Business logic controllers
│   │   ├── 📄 productController.js   # Product operations
│   │   └── 📄 reviewController.js    # Review operations
│   ├── 📁 models/               # Data models
│   │   ├── 📄 product.js        # Product model
│   │   └── 📄 review.js         # Review model
│   ├── 📁 routes/               # API route definitions
│   │   ├── 📄 productRoutes.js  # Product API routes
│   │   └── 📄 reviewRoutes.js   # Review API routes
│   ├── 📄 db.js                 # Database configuration
│   ├── 📄 server.js             # Server entry point
│   └── 📄 package.json          # Backend dependencies
├── 📄 README.md                 # Project documentation
└── 📄 package.json              # Root package configuration
```

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (v6.0.0 or higher) - Comes with Node.js
- **MySQL** (v8.0 or higher) - [Download here](https://dev.mysql.com/downloads/)
- **Git** - [Download here](https://git-scm.com/downloads)

### Verify Installation
```bash
node --version
npm --version
mysql --version
git --version
```

---

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Mohitjadaun2026/Ratings-and-Review-System.git
cd Ratings-and-Review-System
```

### 2. Install Backend Dependencies
```bash
cd server
npm install
```

### 3. Install Frontend Dependencies
```bash
cd ../client
npm install
```

### 4. Return to Root Directory
```bash
cd ..
```

---

## ⚙️ Configuration

### Database Setup

1. **Create MySQL Database**
   ```sql
   CREATE DATABASE ratings_review_db;
   USE ratings_review_db;
   ```

2. **Create Tables**
   ```sql
   -- Products table
   CREATE TABLE products (
       id INT AUTO_INCREMENT PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       description TEXT,
       price DECIMAL(10,2),
       image_url VARCHAR(500),
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );

   -- Reviews table
   CREATE TABLE reviews (
       id INT AUTO_INCREMENT PRIMARY KEY,
       product_id INT,
       user_name VARCHAR(100),
       rating INT CHECK (rating >= 1 AND rating <= 5),
       review_text TEXT,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       FOREIGN KEY (product_id) REFERENCES products(id)
   );
   ```

3. **Configure Database Connection**
   
   Update the database configuration in `server/db.js`:
   ```javascript
   const mysql = require('mysql2');

   const connection = mysql.createConnection({
       host: 'localhost',
       user: 'your_mysql_username',
       password: 'your_mysql_password',
       database: 'ratings_review_db'
   });
   ```

4. **Insert Sample Data (Optional)**
   ```sql
   INSERT INTO products (name, description, price, image_url) VALUES
   ('Smartphone Pro', 'Latest flagship smartphone with advanced features', 999.99, 'https://example.com/phone.jpg'),
   ('Wireless Headphones', 'Premium noise-cancelling wireless headphones', 299.99, 'https://example.com/headphones.jpg'),
   ('Laptop Ultra', 'High-performance laptop for professionals', 1599.99, 'https://example.com/laptop.jpg');
   ```

---

## 🎮 Running the Application

### Method 1: Start Both Services Separately

1. **Start the Backend Server**
   ```bash
   cd server
   node server.js
   ```
   The server will start on `http://localhost:5000`

2. **Start the Frontend (in a new terminal)**
   ```bash
   cd client
   npm start
   ```
   The React app will start on `http://localhost:3000`


---

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Endpoints

#### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get product by ID |
| POST | `/products` | Create new product |
| PUT | `/products/:id` | Update product |
| DELETE | `/products/:id` | Delete product |

#### Reviews

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/reviews` | Get all reviews |
| GET | `/reviews/product/:productId` | Get reviews for specific product |
| POST | `/reviews` | Create new review |
| PUT | `/reviews/:id` | Update review |
| DELETE | `/reviews/:id` | Delete review |

### Sample API Requests

#### Get All Products
```bash
curl -X GET http://localhost:5000/api/products
```

#### Create New Review
```bash
curl -X POST http://localhost:5000/api/reviews \
  -H "Content-Type: application/json" \
  -d '{
    "product_id": 1,
    "user_name": "John Doe",
    "rating": 5,
    "review_text": "Excellent product! Highly recommended."
  }'
```

---

## 💻 Usage

### For Users

1. **Browse Products**
   - Visit `http://localhost:3000`
   - Browse through the product listings
   - View product details and existing reviews

2. **Submit Ratings**
   - Click on a product
   - Use the star rating system to rate the product
   - Submit your rating

3. **Write Reviews**
   - Navigate to the review section
   - Fill out the review form with your experience
   - Submit your review

### For Developers

1. **Adding New Features**
   - Frontend components are in `client/src/components/`
   - Backend routes are in `server/routes/`
   - Database models are in `server/models/`

2. **Customizing Styles**
   - Main styles are in `client/src/styles/App.css`
   - Component-specific styles can be added

3. **Database Schema Changes**
   - Update models in `server/models/`
   - Modify database connection in `server/db.js`

---

## 🚨 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Kill process on port 5000
npx kill-port 5000
```

#### Database Connection Error
- Verify MySQL is running
- Check database credentials in `server/db.js`
- Ensure database exists

#### Module Not Found
```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---


## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Mohit Jadaun

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## 📞 Contact & Support

<div align="center">

**Mohit Jadaun**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Mohitjadaun2026)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mohit-jadaun/)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:jadaunmohit0@gmail.com)

**Found this project helpful? Give it a ⭐ on GitHub!**

</div>

---

## 🙏 Acknowledgments

- **React Team** for the amazing React.js framework
- **Express.js Community** for the robust backend framework
- **MySQL Team** for the reliable database system
- **Open Source Community** for inspiration and resources

---

<div align="center">

**[⬆ Back to Top](#-ratings-and-review-system)**

Made with ❤️ by [Mohit Jadaun](https://github.com/Mohitjadaun2026)

</div>
