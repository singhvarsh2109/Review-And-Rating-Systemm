import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

function ProductList() {
  const [products, setProducts] = useState([]);
useEffect(() => {
  fetch('https://ratings-and-review-system.onrender.com/api/products')
    .then(res => res.json())
    .then(data => setProducts(data));
}, []);

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
